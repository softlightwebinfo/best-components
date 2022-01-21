import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { FileManager } from "../../apps/FileManager/FileManager";

export default {
  title: 'App/FileManager/Default',
  component: FileManager,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof FileManager>;

const Template: ComponentStory<typeof FileManager> = (args) => (
  <FileManager { ...args } />
);

export const Default = Template.bind({});

Default.args = {
  initialActive: "1",
  title: "File manager",
  tags: [
    { title: "Custom Work" },
    { title: "Important Meetings", theme: "warning" },
  ],
  categories: [
    { label: "Images", value: "1", icon: <i className={ "fa fa-image" }/> },
    { label: "Videos", value: "2", icon: <i className={ "fa fa-video" }/> },
    { label: "Documents", value: "3", icon: <i className={ "fa fa-file" }/> },
    { label: "Shared", value: "4", icon: <i className={ "fa fa-users" }/> },
    { label: "Trash", value: "5", icon: <i className={ "fa fa-trash" }/> },
  ],
  files: [
    { type: "1", name: "document.txt", size: "1 mb" },
    { type: "1", name: "audio.mp3", size: "3 mb" },
    { type: "2", name: "video.mp4", size: "30 mb" },
    { type: "2", name: "image.jpg", size: "30 mb" },
    { type: "3", name: "gallery.png", size: "21 mb" },
  ],
};
