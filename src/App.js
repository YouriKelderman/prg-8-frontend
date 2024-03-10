import React from "react";
import {BackgroundGradientAnimation} from "./components/ui/background-gradient-animation.tsx";
import InputForm from "./components/form";
import logo from '../src/img/Varia-removebg-preview (2).png'
import {TracingBeam} from "./components/ui/tracing-beam.tsx";
import * as Tone from 'tone'
const synth = new Tone.Synth().toDestination();

export default function App() {
    return (

        <BackgroundGradientAnimation>

            <InputForm></InputForm>
        </BackgroundGradientAnimation>
    );
}
