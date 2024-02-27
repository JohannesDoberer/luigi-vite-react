import { Component } from 'react';
import { luigiConfig } from './luigi-config';
export default class LuigiComponent extends Component {
    async componentDidMount() {
        await import('@luigi-project/core');
        await import('@luigi-project/core/luigi.css')
        Luigi.setConfig(luigiConfig);
    }
    render() {
        return (<></>)
    }
}