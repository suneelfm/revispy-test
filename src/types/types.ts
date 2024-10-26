export interface Tabs {
  id: string;
  label: string;
}

export interface HandleChangeEvent {
  value: string;
  tabIndex: number;
  form: any;
}
