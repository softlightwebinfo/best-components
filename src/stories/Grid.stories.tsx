import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button, ButtonToolbar, Card, CardBody, SubTitle, Title } from "../components";
import { CardImage } from "../components/Card/CardImage";
import { Grid } from "../components/Grid/Grid";
import { GridItem } from "../components/Grid/GridItem";

export default {
  title: 'Base/Grid/Default',
  component: Grid,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid { ...args } cols={ 4 }>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem>
      <Card>
        <CardImage
          alt={ "Image" }
          src={ "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2017/10/dia-mundial-salud-mental.png" }
        />
        <CardBody>
          <SubTitle>Lun., 11 Octubre 2021</SubTitle>
          <Title>Jornadas de salud mental en tiempos de pandemia</Title>
          <div><span>Quedadas</span></div>
          <small>1499 personas interesadas - 155 asistirán</small>
          <ButtonToolbar className={ "mt-8" }>
            <Button block dark icon={ <i className="fa fa-star"/> }>Me interesa</Button>
            <Button dark icon={ <i className="fa fa-share"/> }/>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </GridItem>
  </Grid>
);
export const Default = Template.bind({});
Default.args = {};
