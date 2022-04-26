import { createNavigationContainerRef } from '@react-navigation/native';
import {MetadataObj} from "../interfaces/interfaces";

export const navigationRef = createNavigationContainerRef()

export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}