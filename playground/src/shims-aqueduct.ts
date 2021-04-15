import { ComponentCustomProperties } from 'vue'
import Aqueduct from '../../src/aqueduct';
import Alert from '../../src/messager';
import Messager from '../../src/messager';

type AqueductFunction = (name?: string) => Aqueduct;

declare module '@vue/runtime-core' {

    interface ComponentCustomProperties {
        $aqueduct: AqueductFunction;
        $msg: Messager;
        $alert: Alert;
    }
}
