import React, { useMemo, useState } from "react";
import { Card, CardBody, Divider, Item, SubTitle, Title } from "../../components";
import { DotItem } from "../../components/Dot/DotItem";
import { List } from "../../components/List/List";
import { Toolbar } from "../../components/Toolbar/Toolbar";
import { ToolbarRight } from "../../components/Toolbar/ToolbarRight";
import { BEM } from "../../functions";
import { IFileManagerProps } from "../../props/IFileManagerProps";

const getIcon = (file: string) => {
  const [_, ext] = file.split(".");
  switch (ext) {
    case "text":
    case "txt": {
      return <i className={ "fa fa-file" }/>;
    }
    case "mp3": {
      return <i className={ "fa fa-microphone" }/>;
    }
    case "mp4": {
      return <i className={ "fa fa-video" }/>;
    }
    case "jpeg":
    case "jpg":
    case "png": {
      return <i className={ "fa fa-image" }/>;
    }
  }
  return null;
};

export const FileManager = (props: IFileManagerProps) => {
  const [active, setActive] = useState(props.initialActive);

  const cx = new BEM("FileManager", {});
  cx.Append(props.className);

  const files = useMemo(() => {
    const files = props.files?.map((item, index) => {
      if (typeof active != "undefined" && active !== item.type) {
        return null;
      }
      if (props.card) {
        return props.card?.(item, index);
      }
      return (
        <Card key={ index } onClick={ () => props.onClick?.(item, index) }>
          { props.header?.(item, index) }
          <CardBody>
            { item.icon ?? getIcon(item.name) }
            <Title>{ item.name }</Title>
            <SubTitle>{ item.size }</SubTitle>
            { props.body?.(item, index) }
          </CardBody>
          { props.footer?.(item, index) }
        </Card>
      );
    });
    return {
      content: files,
      empty: !files.filter(file => file != null).length,
    };
  }, [props.files, active]);

  return (
    <div className={ cx.toString() } style={ props.style }>
      <Card>
        <CardBody>
          <List
            onClick={ item => setActive(item.value) }
            active={ active }
            list={ props.categories ?? [] }
          />
          <Divider spacer/>
          { props.tags?.map((item, index) => (
            <Item key={ index }>
              <DotItem { ...item }/>
            </Item>
          )) }
          <Item><i className={ "fa fa-plus" }/> Add new Label</Item>
        </CardBody>
      </Card>
      <section>
        <Toolbar>
          <Title>{ props.title }</Title>
          <ToolbarRight>
            { props.toolbarRight }
          </ToolbarRight>
        </Toolbar>
        <div className={ cx.Children("content") }>
          { files.content }
        </div>
        { files.empty && props.empty }
      </section>
    </div>
  );
};
