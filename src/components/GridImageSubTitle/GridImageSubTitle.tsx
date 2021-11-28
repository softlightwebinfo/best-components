import React from "react";
import { BEM } from "../../functions";
import { IGridImageSubTitleProps } from "../../props/IGridImageSubTitleProps";
import { Button } from "../Button";
import { ButtonToolbar } from "../ButtonToolbar";
import { Center } from "../Center";
import { Grid, GridItem } from "../Grid";
import { GridImageItem } from "../GridImageItem/GridImageItem";
import { SubTitle } from "../Subtitle";
import { Title } from "../Titlte";

export const GridImageSubTitle = (props: IGridImageSubTitleProps) => {
  const cx = new BEM("GridImageSubTitle", {});
  cx.Append(props.className);
  return (
    <div className={ cx.toString() } style={ props.style }>
      <GridImageItem
        style={ { marginBottom: 80 } }
        imageLeft={ props.imageLeft }
        imageRight={ props.imageRight }
      />
      { props.items && (
        <Grid cols={ 3 } gap={ 60 }>
          { (props.items ?? []).map((item, index) => (
            <GridItem key={ index }>
              <ButtonToolbar>
                <div>
                  <Title className="mb-4">{ item.icon } { item.title }</Title>
                  <SubTitle>{ item.description }</SubTitle>
                </div>
              </ButtonToolbar>
            </GridItem>
          )) }
        </Grid>
      ) }
      { props.button && (
        <Center style={ { margin: 80, marginBottom: 20 } }>
          <Button size={ "lg" } { ...props.button }/>
        </Center>
      ) }
    </div>
  );
};
