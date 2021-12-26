import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { KanbanApp } from "../../apps/KanbanApp/KanbanApp";

export default {
  title: 'App/Kanban/Default',
  component: KanbanApp,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof KanbanApp>;

const Template: ComponentStory<typeof KanbanApp> = (args) => (
  <KanbanApp
    { ...args }
  />
);

export const Default = Template.bind({});

Default.args = {
  team: {
    1: { name: "Rafa Gonzalez", id: 1 },
    2: { name: "Carlos Rodriguez", id: 2 },
    3: { name: "Amanda", id: 3 },
  },
  panels: {
    1: {
      title: "Backlog",
      cards: {
        1: { date: "Due 4 days", title: "A/B Testing" },
        3: { title: "Adwords" },
        9: {
          title: "Device Testing", date: "Due 16 days", number: 0, numberTotal: 18, progress: 20,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
        2: { date: "Due 4 days", title: "A/B Testing" },
        4: { title: "Adwords" },
        5: {
          title: "Device Testing", date: "Due 16 days", number: 0, numberTotal: 18, progress: 20,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    2: {
      title: "Waiting",
      cards: {
        2: {
          title: "Prueba",
          date: "Due 16 days",
          number: 18,
          numberTotal: 18,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    3: {
      title: "Backlog",
      cards: {
        1: { date: "Due 4 days", title: "A/B Testing" },
        3: { title: "Adwords" },
        9: {
          title: "Device Testing", date: "Due 16 days", number: 0, numberTotal: 18, progress: 20,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    4: {
      title: "Waiting",
      cards: {
        2: {
          title: "Prueba",
          date: "Due 16 days",
          number: 18,
          numberTotal: 18,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    5: {
      title: "Backlog",
      cards: {
        1: { date: "Due 4 days", title: "A/B Testing" },
        3: { title: "Adwords" },
        9: {
          title: "Device Testing", date: "Due 16 days", number: 0, numberTotal: 18, progress: 20,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    6: {
      title: "Waiting",
      cards: {
        2: {
          title: "Prueba",
          date: "Due 16 days",
          number: 18,
          numberTotal: 18,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    7: {
      title: "Backlog",
      cards: {
        1: { date: "Due 4 days", title: "A/B Testing" },
        3: { title: "Adwords" },
        9: {
          title: "Device Testing", date: "Due 16 days", number: 0, numberTotal: 18, progress: 20,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    8: {
      title: "Waiting",
      cards: {
        2: {
          title: "Prueba",
          date: "Due 16 days",
          number: 18,
          numberTotal: 18,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    9: {
      title: "Backlog",
      cards: {
        1: { date: "Due 4 days", title: "A/B Testing" },
        3: { title: "Adwords" },
        9: {
          title: "Device Testing", date: "Due 16 days", number: 0, numberTotal: 18, progress: 20,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
    10: {
      title: "Waiting",
      cards: {
        2: {
          title: "Prueba",
          date: "Due 16 days",
          number: 18,
          numberTotal: 18,
          team: {
            1: { name: "Rafa Gonzalez", id: 1 },
            2: { name: "Carlos Rodriguez", id: 2 },
            3: { name: "Amanda", id: 3 },
          },
        },
      },
    },
  },
};
