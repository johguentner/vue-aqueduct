import { ComponentCustomProperties } from 'vue'
import Aqueduct from '../../src/aqueduct';

type AqueductFunction = (name: string) => Aqueduct;

declare module '@vue/runtime-core' {

    interface ComponentCustomProperties {
        $aqueduct: AqueductFunction;
    }
}
