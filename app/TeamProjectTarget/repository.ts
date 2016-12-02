export class Repository {

    properties: Properties;
    id: string;
    type: string;
    name: string;
    url: string;
    defaultBranch: string;
    rootFolder: string;
    clean: string;
    checkoutSubmodules: boolean

}


export class Properties{

    labelSources: number;
    tfvcMapping: any

}

