export interface IPlanField {
  id: string;
  value: boolean;
  label: string;
  description: string;
}

export interface IState {
  manual: boolean;
  commonPlans: string[];
  advancedPlans: string[];
  selectedSource: string;
  featuredPlans: any[];
  showFeaturedPlans: boolean;
  selectedPlans: string[];
}

export interface ISources {
  commonFields: {
    [key: string]: IPlanField;
  };
  advancedFields: {
    [reference: string]: IPlanField[];
  };
  sourceNames: {
    [reference: string]: string;
  };
  sourceGroups: {
    [groupName: string]: string[];
  };
}

export interface IPlansConfigurator {
  sources: ISources;
  manual : boolean
  commonPlans: string[];
  selectedPlans: string[];
  advancedPlans: string[];
  featuredPlans: string[];
  showFeaturedPlans: boolean;
}

export interface ISourcesLayout {
  sourceNames: ISources["sourceNames"];
}

export  interface ISaveButton {
  settings: string[];
}

export interface IRadioOption {
  id: string;
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
  onChange?: (value: string) => void;
}

export interface IRadioGroup {
  name: string;
  options: { id: string; value: string; label: string, defaultChecked?:boolean }[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export interface IRadioConfig {
  onCustomFeatured: (value:boolean) => void;
}

export interface IPlansDisplay {
  sources : ISources;
}

export interface IPlansSearcher {
  onSearch?: (query: string) => void;
}

export interface IFeaturedPlanCheckbox {
  referenceTo : string,
  planChecked : boolean,
  featuredPlans?: string[] 
  onPlanChecked?: (value: string[]) => void;
}