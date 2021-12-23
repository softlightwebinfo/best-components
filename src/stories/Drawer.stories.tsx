import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { ButtonToolbar } from "../components";
import { Button } from "../components/Button";
import { Drawer } from "../components/Drawer/Drawer";
import { DrawerContent } from "../components/Drawer/DrawerContent";
import { DrawerFooter } from "../components/Drawer/DrawerFooter";
import { DrawerHeader } from "../components/Drawer/DrawerHeader";

export default {
  title: 'Base/Drawer/Default',
  component: Drawer,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={ () => setOpen(true) }>Click</Button>
      <Drawer { ...args } open={ open } onClose={ () => setOpen(false) }>
        <DrawerHeader title={ "Listado de comentarios" }/>
        <DrawerContent>
          <p>
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
            What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like). What is Lorem Ipsum?
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's
            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking
            at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as
            opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem
            ipsum'
            will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes
            by
            accident, sometimes on purpose (injected humour and the like).
          </p>
        </DrawerContent>
        <DrawerFooter>
          <ButtonToolbar>
            <Button>Cancelar</Button>
            <Button>Guardar</Button>
          </ButtonToolbar>
        </DrawerFooter>
      </Drawer>
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {};
