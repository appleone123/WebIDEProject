import { ComponentProperties } from './componentProperties';

export class ButtonProperties extends ComponentProperties {
    icon: any;
    nzGhost: boolean | string;
    nzLoading: boolean | string;
    nzShape: 'circle' | 'round' | 'default';
    nzSize: 'large' | 'small' | 'default';
    nzType: 'primary' | 'dashed' | 'danger' | 'default' | 'link';
    nzBlock: boolean;
    content: any;
}

