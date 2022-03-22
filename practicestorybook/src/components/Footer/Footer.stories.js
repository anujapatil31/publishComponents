import React from 'react';
import Footer from './Footer';


export default {
    title: "Component/Footer",
    component: Footer,
    argTypes: {
        variant: {control: 'text'},
        children: {control: 'text'},
    }
};

const Template = (args) => <Footer {...args} />

export const Example1 = Template.bind({});
Example1.args = {
    variant: 'green',
    children: 'Pune,Maharashtra,India'
}
export const Example2 = Template.bind({});
Example2.args = {
    variant: 'blue',
    children: 'Mumbai,Maharashtra,India'
}