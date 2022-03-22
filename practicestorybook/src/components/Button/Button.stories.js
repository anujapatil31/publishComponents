import React from "react";
import Button from "./Button";
//import Center from "../Center/Center";

export default {
    title: 'Component/Button',
    component: Button,
    // decorators: [story => <Center>{story()}</Center>] //instead of doing it individually you can wrap it here
}

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>