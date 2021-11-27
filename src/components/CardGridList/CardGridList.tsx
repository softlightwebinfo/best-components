import React, { useMemo } from "react";
import { BEM } from "../../functions";
import { ICardGridListItem, ICardGridListProps } from "../../props/ICardGridListProps";
import { Card, CardBody } from "../Card";
import { SubTitle } from "../Subtitle";
import { Title } from "../Titlte";

export const CardGridList = (props: ICardGridListProps) => {
  const cx = new BEM("CardGridList", {});
  cx.Append(props.className);

  const rows = useMemo(() => {
    let data: Record<number, ICardGridListItem[]> = {};
    let pos: number = 0;
    props.data.forEach((item) => {
      if (!data[pos]) {
        data[pos] = [];
      }
      data[pos].push(item);
      pos++;
      if (pos > 2) {
        pos = 0;
      }
    });
    return data;
  }, [props.data]);

  return (
    <div className={ cx.toString() } style={ props.style }>
      { Object.entries(rows).map(([key, item], index: number) => (
        <div key={ index } className={ cx.Children("column") }>
          { item.map((item, index) => (
            <Card key={ index } className={ cx.Children("item") }>
              <CardBody>
                <Title>{ item.title }</Title>
                <SubTitle>{ item.message }</SubTitle>
              </CardBody>
            </Card>
          )) }
        </div>
      )) }
    </div>
  );
};
