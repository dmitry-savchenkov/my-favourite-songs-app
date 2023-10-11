import React, {JSX} from "react";
import {SongsList} from "./components/SongsList";
import {Wrapper} from "./components/Wrapper";
import {LogIn} from "./components/LogIn";

const App = (): JSX.Element => {
    return (<Wrapper>
        <LogIn />
        <SongsList songs={[]}/>
    </Wrapper>);
};

export default App;