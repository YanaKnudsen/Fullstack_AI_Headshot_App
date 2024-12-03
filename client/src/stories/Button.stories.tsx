import {Meta,StoryObj} from "@storybook/react"
import {fn} from "@storybook/test"
import {Button} from "../assets/UI/buttonNew";
import {ComponentProps} from "react";

//means StoryProps type is the same as type of Button
type StoryProps=ComponentProps<typeof Button&{
    buttonText:string;
}>;

const meta: Meta<StoryProps> = {
    component: Button,
    argTypes: {
        variant: {
            options: ['primary', 'secondary'],
            control: {
                type: "select",
            }
        },
        size: {
            options: ['sm', 'md','lg'],
            control: {
                type: "select",
            }
        }
    },
    args:{
        onClick:fn()
    }
};
export default meta;

type Story=StoryObj<StoryProps>;
export const Primary: Story = {
    args:{
        buttonText:"Test2",
        variant:'primary',
        size:'md',
    },
    render: ({buttonText,...args}) => <Button {...args} >{buttonText}</Button>,

};

export const Secondary: Story = {
    args:{
        buttonText:"Test2",
        variant:'secondary',
        size:'md',
    },
    render: ({buttonText,...args}) => <Button {...args} >{buttonText}</Button>,

};
