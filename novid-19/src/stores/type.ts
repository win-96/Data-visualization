
export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface Total {
  nowConfirm: number;
  continueDayZeroLocalConfirmAdd: number;
  dead: number;
  showRate: boolean;
  wzz: number;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirm: number;
  showHeal: boolean;
  highRiskAreaNum: number;
  mtime: string;
  adcode: string;
  confirm: number;
  heal: number;
  provinceLocalConfirm: number;
}

export interface Today {
  local_confirm_add: number;
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
  wzz_add: number;
}

export interface Total {
  continueDayZeroConfirm: number;
  continueDayZeroLocalConfirmAdd: number;
  nowConfirm: number;
  showHeal: boolean;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
  continueDayZeroConfirmAdd: number;
  confirm: number;
  wzz: number;
  mtime: string;
  showRate: boolean;
  highRiskAreaNum: number;
  adcode: string;
  dead: number;
  heal: number;
}

export interface Today {
  wzz_add: number;
  local_confirm_add: number;
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
}

export interface Total {
  confirm: number;
  showRate: boolean;
  wzz: number;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirm: number;
  nowConfirm: number;
  dead: number;
  mtime: string;
  heal: number;
  continueDayZeroLocalConfirmAdd: number;
  adcode: string;
  showHeal: boolean;
  provinceLocalConfirm: number;
  highRiskAreaNum: number;
}

export interface Children {
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
}

export interface Children {
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface AreaTree {
  today: Today;
  total: Total;
  children: Children[];
  name: string;
}

export interface ChinaTotal {
  localConfirmH5: number;
  localConfirmAdd: number;
  highRiskAreaNum: number;
  nowConfirm: number;
  noInfect: number;
  showlocalinfeciton: number;
  noInfectH5: number;
  local_acc_confirm: number;
  localWzzAdd: number;
  confirmAdd: number;
  mtime: string;
  nowSevere: number;
  showLocalConfirm: number;
  suspect: number;
  importedCase: number;
  nowLocalWzz: number;
  mRiskTime: string;
  heal: number;
  dead: number;
  mediumRiskAreaNum: number;
  localConfirm: number;
  confirm: number;
  deadAdd: number;
}

export interface ChinaAdd {
  confirm: number;
  heal: number;
  suspect: number;
  nowSevere: number;
  noInfect: number;
  localConfirmH5: number;
  dead: number;
  nowConfirm: number;
  importedCase: number;
  localConfirm: number;
  noInfectH5: number;
}

export interface ShowAddSwitch {
  nowSevere: boolean;
  importedCase: boolean;
  noInfect: boolean;
  all: boolean;
  heal: boolean;
  nowConfirm: boolean;
  localConfirm: boolean;
  localinfeciton: boolean;
  confirm: boolean;
  suspect: boolean;
  dead: boolean;
}

export interface Diseaseh5Shelf {
  areaTree: AreaTree[];
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
}

export interface LocalCityNCOVDataList {
  local_confirm_add: number;
  local_wzz_add: string;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  isSpecialCity: boolean;
  isUpdated: boolean;
  mtime: string;
  adcode: string;
  date: string;
  province: string;
  city: string;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  localCityNCOVDataList: LocalCityNCOVDataList[];
}