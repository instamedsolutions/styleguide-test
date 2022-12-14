import React from 'react';
import {
  MdCheck as CheckIcon,
  MdError as ErrorIcon,
  MdClose as CloseIcon,
  MdKeyboardArrowDown as ArrowDownIcon,
  MdKeyboardArrowRight as ArrowRightIcon,
  MdKeyboardArrowLeft as ArrowLeftIcon,
  MdKeyboardArrowUp as ArrowUpIcon,
  MdWarning as WarningIcon,
  MdSearch as SearchIcon,
  MdHome as HomeIcon,
  MdGroup as GroupIcon,
  MdMasks as MasksIcon,
  MdHourglassTop as HourglassTopIcon,
  MdManageAccounts as ManageAccountsIcon,
  MdLaptop as LaptopIcon,
  MdPeopleAlt as PeopleIcon,
  MdPersonOff as PersonOffIcon,
  MdSummarize as SummarizeIcon,
  MdOutlineEvent as OutlineEventIcon,
  MdCalendarViewMonth as CalendarViewMonthIcon,
  MdEmail as MailIcon,
  MdCoronavirus as VirusIcon,
  MdOutlineHealing as HealingIcon,
  MdTextSnippet as TextSnippetIcon,
  MdModeEditOutline as EditIcon,
  MdOutlineHelp as HelpIcon,
  MdFactCheck as FactCheckIcon,
  MdShare as ShareIcon,
  MdOutlineSync as SyncIcon,
  MdOutlineEditNote as EditNoteIcon,
  MdQuiz as QuizIcon,
  MdWifiTethering as WifiIcon,
  MdOutlineSettingsApplications as SettingsAppIcon,
  MdOutlineMenu as MenuIcon,
  MdDns as DnsIcon,
  MdWidgets as WidgetsIcon,
  MdSwitchAccount as SwitchAccountIcon,
  MdOutlineAssignment as AssignementIcon,
  MdPersonAdd as PersonAddIcon,
  MdOutlineRecentActors as RecentActorsIcon,
  MdSettings as SettingsIcon,
  MdOutlineGroupWork as GroupWorkIcon,
  MdOutlineSmartphone as SmartphoneIcon,
  MdToc as TocIcon,
  MdDescription as DescriptionIcon,
  MdFolder as FolderIcon,
  MdTipsAndUpdates as TipsIcon,
  MdOutlineBrokenImage as BrokenIcon, // Replace monitor_heart
  MdOutlineFileCopy as FileCopyIcon, // replace difference
  MdNotificationsActive as NotificationPushIcon,
  MdNotifications as NotificationIcon,
  MdImage as ImageIcon,
  MdPerson as UserIcon,
  MdOutlineAdminPanelSettings as PanelSettingsIcon,
  MdOutlineReportProblem as ReportProblemIcon,
  MdCreditCard as CreditCardIcon,
  MdSubject as SubjectIcon,
  MdListAlt as ListAltIcon,
  MdFilterAlt as FilterIcon,
  MdTableChart as TableChartIcon,
  MdFilePresent as FilePresentIcon
} from 'react-icons/md';

import {
  FaSignOutAlt as LogoutIcon,
  FaHospital as HospitalIcon,
  FaAngleDoubleRight as DoubleArrowIcon,
  FaSortAmountDown as SortDescIcon,
  FaSortAmountUp as SortAscIcon,
  FaCode as Code
} from "react-icons/fa";

import {
  IoMdCloseCircle as CloseCircleIcon
} from "react-icons/io";

import {
  FiEyeOff as EyeOffIcon,
  FiEye as EyeIcon
} from 'react-icons/fi';

import { ImSpinner8 as SpinnerIcon } from 'react-icons/im';

import {
  RiCactusLine as CactusIcon
} from "react-icons/ri";

export {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  CloseIcon,
  CloseCircleIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  ErrorIcon,
  SearchIcon,
  SpinnerIcon,
  WarningIcon,
  HomeIcon,
  GroupIcon,
  MasksIcon,
  HourglassTopIcon,
  ManageAccountsIcon,
  LaptopIcon,
  PeopleIcon,
  PersonOffIcon,
  SummarizeIcon,
  OutlineEventIcon,
  CalendarViewMonthIcon,
  MailIcon,
  VirusIcon,
  HealingIcon,
  TextSnippetIcon,
  EditIcon,
  HelpIcon,
  FactCheckIcon,
  ShareIcon,
  SyncIcon,
  EditNoteIcon,
  QuizIcon,
  WifiIcon,
  SettingsAppIcon,
  MenuIcon,
  DnsIcon,
  WidgetsIcon,
  SwitchAccountIcon,
  AssignementIcon,
  LogoutIcon,
  PersonAddIcon,
  RecentActorsIcon,
  SettingsIcon,
  GroupWorkIcon,
  SmartphoneIcon,
  TocIcon,
  DescriptionIcon,
  FolderIcon,
  TipsIcon,
  BrokenIcon,
  FileCopyIcon,
  NotificationPushIcon,
  NotificationIcon,
  HospitalIcon,
  DoubleArrowIcon,
  ImageIcon,
  UserIcon,
  Code,
  PanelSettingsIcon,
  ReportProblemIcon,
  CreditCardIcon,
  SubjectIcon,
  ListAltIcon,
  FilterIcon,
  CactusIcon,
  TableChartIcon,
  SortDescIcon,
  SortAscIcon,
  FilePresentIcon
};

const icons: {[index: string]: React.ComponentType} = {
  arrowDown: ArrowDownIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  arrowUp: ArrowUpIcon,
  close: CloseIcon,
  closeCircle: CloseCircleIcon,
  check: CheckIcon,
  eyeOff: EyeOffIcon,
  eye: EyeIcon,
  error: ErrorIcon,
  search: SearchIcon,
  spinner: SpinnerIcon,
  warning: WarningIcon,
  home: HomeIcon,
  group: GroupIcon,
  masks: MasksIcon,
  hourglassTop: HourglassTopIcon,
  manageAccounts: ManageAccountsIcon,
  laptop: LaptopIcon,
  people: PeopleIcon,
  personOff: PersonOffIcon,
  summarize: SummarizeIcon,
  outlineEvent: OutlineEventIcon,
  calendarViewMonth: CalendarViewMonthIcon,
  mail: MailIcon,
  virus: VirusIcon,
  healing: HealingIcon,
  textSnippet: TextSnippetIcon,
  edit: EditIcon,
  help: HelpIcon,
  factCheck: FactCheckIcon,
  share: ShareIcon,
  sync: SyncIcon,
  editNote: EditNoteIcon,
  quizz: QuizIcon,
  wifi: WifiIcon,
  settingsApp: SettingsAppIcon,
  menu: MenuIcon,
  dns: DnsIcon,
  widgets: WidgetsIcon,
  switch: SwitchAccountIcon,
  assignement: AssignementIcon,
  logout: LogoutIcon,
  personAdd: PersonAddIcon,
  recentActors: RecentActorsIcon,
  settings: SettingsIcon,
  groupWork: GroupWorkIcon,
  smartphone: SmartphoneIcon,
  toc: TocIcon,
  description: DescriptionIcon,
  folder: FolderIcon,
  tips: TipsIcon,
  broken: BrokenIcon,
  fileCopy: FileCopyIcon,
  notificationPush: NotificationPushIcon,
  notification: NotificationIcon,
  hospital: HospitalIcon,
  doubleArrow: DoubleArrowIcon,
  imageIcon: ImageIcon,
  userIcon: UserIcon,
  code: Code,
  panelSettings: PanelSettingsIcon,
  reportProblem: ReportProblemIcon,
  creditCard: CreditCardIcon,
  subject: SubjectIcon,
  listAlt: ListAltIcon,
  filterIcon: FilterIcon,
  cactus: CactusIcon,
  tableChart: TableChartIcon,
  filePresent: FilePresentIcon
};

const values = Object.keys(icons);

export type IconType = typeof values[number];

export default icons;
