import { ComponentProperties } from './componentProperties';

export class ButtonProperties extends ComponentProperties {
    icon: any;
    nzGhost: boolean;
    nzLoading: boolean;
    nzShape: 'circle' | 'round';
    nzSize: 'large' | 'small' | 'default';
    nzType: 'primary' | 'dashed' | 'danger' | 'default' | 'link';
    nzBlock: boolean;
    content: any;
}
