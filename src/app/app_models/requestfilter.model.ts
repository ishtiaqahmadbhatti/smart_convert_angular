
export class RequestFilter {
  SearchType: number=0;
  SrcAccountId: number=0;
  SrcCurrencyID: number=0;
  Payoutcurrency: any;
  PayinBranchID: number=0;
  IsCommissionCoverExchangeRate: any;
  TransferType: string = "";
  DocumentID: any;
  CSQueryId: number=0;
  ID: number=0;
  MailBoxID: number = 0;
  IsMailBoxEmail: boolean = false;
  MailFolderId: number = 0;
  MailStatusID: number = 0;
  PageNumber: number = 1;
  PageSize: number = 10;
  Search: string = "";
  BranchCode: string = "";
  CountryID: number = 0;
  SrcAccountID: number = 0;
  SrcBranchID: number = 0;
  DestCountryID: number = 0;
  DestAccountID: number = 0;
  DestBranchID: number = 0;
  IsNegative: boolean = false;
  PaymentModeID: number = 0;
  CurrencyID: number = 0;
  RemitTypeID: number = 0;
  ZoneID: number = 0;
  DestCurrencyID: number = 0;
  MarginType: number = 0;
  ProfileID: number = 0;
  AccountTypeID: number = 0;
  COAID: number = 0;
  CategoryTypeID: number = 0;
  IsAgency: boolean = false;
  IsActive: boolean =true;
  Active: boolean = true;
  IsDualApprover: boolean = false;
  IsAutoRevalue: boolean = false;
  IsIsMainAgentAccount: boolean =false;
  IsMainAgentAccount: boolean = false;
  PartnerTypeID: number = 0;
  IsAPIProfile: boolean = false;
  IsDirArr: boolean=false;
  PaymentType: string = "";
  Code: string = "";
  BankID: number = 0;
  AvailableSettlementAccountID: number = 0;
  MainAgentAccountID: number = 0;
  SubAgentAccountID: number = 0;
  CityID: number = 0;
  CashAmount: number = 0;
  BankAmount: number = 0;
  StatusID: number = 0;
  Deal: number = 0;
  ReceiveAgentId: number = 0;
  DealRate: number = 0;
  ASId: number = 0;
  UserId: number = 0;
  SrcCountryID: number = 0;
  APIAgentID: number = 0;
  BeneficiaryID: number = 0;
  CustomerID: number = 0;
  PayinAccountID: number = 0;
  Month: number = 0;
  Year: number = 0;
  ProgramID: number = 0;
  PayoutAccountID: number = 0;
  PayoutCountryID: number = 0;
  PayinCountryID: number = 0;
  CategoryID: number = 0;
  SettlementBankID: number = 0;
  ReportTypeID: number = 0;
  BenBankID: number = 0;
  Amount: number = 0;
  CreatedBy: number = 0;
  BlockType: number = 0;
  CommType: number = 0;
  IsPaymentGateway: boolean = false;
  IsOnline: boolean = false;
  ISDeleted: boolean = false;
  StartDate: Date;
  EndDate: Date;
  DateAs: Date = new Date();
  RoleType: string = "";
  CardNo: string = "";
  Name: string = "";
  TransactionType: string = "";
  prefixText: string = "";
  RebateFromCountryID: number = 0;
  RebateFromAccountID: number = 0;
  RebateFromCurrencyID: number = 0;
  RebateFromType: number = 0;
  RebateToAcountID: number = 0;
  ComplinaceSourTypeID: number = 0;
  AccountID: number = 0;
  SegmentationTypeID: number = 0;
  SegmentationOptionID: number = 0;
  VoucherNo: string = "";
  TransactionNo: string = "";
  SenderAgentID: number = 0;
  MasterID: number = 0;
  DealID: number = 0;
  IsDealShow: boolean = false;
  DealOptionID: number = 0;
  Type: string = "";
  CSQueryTypeId: number = 0;
  IsQueryClosed: boolean = false;
  InitateRate: boolean = false;
  IsProfileView: boolean = false;
  SegmentationID: number = 0;
  TypeID: number = 0;
  FundDepositOptionID: number = 0;
  ComplianceSettingID: number = 0;
  FundDepositTypeID: number = 0;
  IsSender: boolean = false;
  DeptID: number = 0;
  AccessLevelID: number = 0;
  ShareTypeID: number = 0;
  ReceiveCountryID: number = 0;
  ReceiveAccountID: number = 0;
  CashThreshold: number = 0;
  BankThreshold: number = 0;
  ReportType: string = "";
  ReportID: number = 0;
  EntryType: string = "";
  TransferTypeID: number = 0;
  ConnStr: string = "";
  IsSrcAllSelected: boolean = false;
  IsDestAllSelected: boolean = false;
  AccountCategoryTypeID: number=0;
  FieldIDs: string='';
  Field_Type: string='';
  DocPath: string = "";
  ProgramBy: number = 0;
  IsFixed: boolean = false;  
  Status: string = "";
  TransactionID: number = 0;
  UserID: number = 0;
  CustSearch: string = "";
  BenSearch: string = "";
  CustomerName: string = "";
  BeneficiaryName: string = "";
  CSQueryTypeID: number = 0;
  AcceptableAmount: number = 0;
  SelectedIDType: number = 0;
  PaidAccountID: number = 0;
  CurrencyScale: number = 0;
  SrcCurrencySettlementRate: number = 0;
  DestCurrencySettlementRate: number = 0;
  PayInAmount: number = 0;
  PayOutAmount: number = 0;
  FileExtension: string = "";
  PayinCurrencyID: number = 0;
  PaymentMode: string = "";
  BuyFundingAccountID: number = 0;
  BuyLCAccountID: number = 0;
  UserName: string = "";
  VoucherType: number=0;
  Approved: number=0;
  BlockTypeID: number = 0;
  BranchID: number = 0;
  DealValue: string = "";
  FundingAccountID: number = 0;
  LCAccountID: number = 0;
  ReceiveAgentProfileID: number = 0;
  MaxAccountMarginPercent: string = "";
  RebateToCurrency: string = "";
  SDNID: string = "";
  QueryTypeID: number = 0;
  ModeType: string = "";
  PayoutCurrencyID: number = 0;
  PayoutBranchID: number = 0;
  MaxLength: number = 0;
  QuichSearch: string = "";
  IsCMPrvNat: boolean = false;
  IsBMPrvNat: boolean = false;
  Date: Date;
  ActiveUserID: string='';
  AssignedBy: number=0;
  IsBackendCharges: boolean = false;
  IsRebate: boolean = false; 
  NotificationTypeID: number = 0;
  LoyaltyTypeID: number = 0;  
  IDs: string='';
  IntegrationOption: string="";
  IntegrationType: number = 0;
  SessionID: string = "";
  Password: string = "";
  ConfirmPassword: string = "";
  ReceiptType: string = "";
  DuplicateReceipt: string = "";
  Reason: string = "";
  IsNewRef: boolean = false;
  IsDataPushed: boolean = false;
  IsTransactionStatusProPaid: boolean = false;
  IsErrorRecived: boolean = false;
  IsConfirmedErrorEmail: boolean = false;
  RepushRequestID: number = 0;
  CollectionParam: any[] = [];
  IsAPIUser: boolean = false;
  qid: number = 0;
  Query: string = "";
  TrxnType: string = "";
  Condition: string = "";
  DifferentBank: string = "";
  SameBank: string = "";
  Title: string = "";
  ReportName: string = "";
  DestCurrencyCode: string='';
  SrcCurrencyCode: string='';
  IsManager: boolean = false;
  AccountName: string = '';
  rdAll: boolean = false;
  rdSameBank: boolean = false;
  PaymentCategoryType: string = "";
  CurrentStatus: string="";
  ReasonID: number = 0;
  BankName: string="";
  IsPayin: boolean = false;
  ModifiyReferenceNo: string = "";
  Purpose: string = "";
  SenderUser: number = 0;
  Filter: string = "";
  IsDealBalanceRequired: boolean=false;
  IsRequiredAmountDiverted: boolean=false;
  PayoutCurrencyScale: number = 0;
  FundTransitAmountID: number = 0;
  FileName: string = "";
  PageRecord: number = 30;
  Level1ID: number = 0;
  AccountNo: string = "";
  ExternalCode: string = "";
  HoldTime: number = 0;
  TempHoldTime: number = 0;
  PercentageIncrease: number = 0;
  HoldtimeBaseOnPercentage: number = 0;
  CallAfterNumberofTranx: number = 0;
  CallAfterGreaterThenAmount: number = 0;
  CNationality: string='';
  AppWebFormID: string = '';
  Details: string = "";
  IdentiName: string='';
  IsSessionNull: boolean = false;
  MessageDescription: string = '';
  MobileNetwork: string = "";
  MobileNetworkID: number = 0;
  TopBillerID: number = 0;
  TopBiller: string = "";
  RatioType: string = '';
  BMobileNo: string = '';
  JSONRequest: string = '';
  SrcType: number = 0;
  FromAmount: number = 0;
  ToAmount: number = 0;
  FirstName: string = "";
  MiddleName: string = "";
  LastName: string = "";
  FourthName: string = "";
  Day: number = 0;
  ComplianceMatch: number = 0;
  IsTransactionCommissionChanger: boolean = false;
  ProfileName: string = "";
  BranchName: string = "";
  UserFullName: string = "";
  IDIssueDate: string = "";
  IDExpiryDate: string = "";
  IDNumber: string = "";
  ReferenceNumber: string = "";
  IsDecline: boolean = false;
  MobileAppDocID: number = 0;
  SDNType: string = "";
  MobileAppAddressDocID: number = 0;
  MobileAppProfileDocID: number = 0;
  SMSApiServiceID: number = 0;
  CustomFolderID: number = 0;
  UserRoles: string = "";
  UserRolesIDs: string = "";
  IsNewReport: boolean = false;
  CRUDType: string="";
  Form: string="";
  IsDisabled: boolean=false;
    AlterBy: number=0;
  DealDateTime: Date = new Date();
  //11/3/24 Umair Abid For Compliance
  CFirstName: string = "";
  CLastName: string = "";
  CMiddleName: string = "";
  CFourthName: string = "";
  CAddress: string = "";
  SenderFirstNameReqried: boolean = false;
  SenderMiddleNameReqried: boolean = false;
  SenderLastNameReqried: boolean = false;
  SenderFourthNameReqried: boolean = false;
  SenderAddressReqried: boolean = false;

  BeneficiaryFirstName: string = "";
  BeneficiaryMiddleName: string = "";
  BeneficiaryLastName: string = "";
  BeneficiaryFourthName: string = "";
  BeneficiaryAddress: string = "";
  BeneficiaryFirstNameReqried: boolean = false;
  BeneficiaryMiddleNameReqried: boolean = false;
  BeneficiaryLastNameReqried: boolean = false;
  BeneficiaryFourthNameReqried: boolean = false;
  BeneficiaryAddressReqried: boolean = false;
  DocRequired: string = "";
  IDCopyDocumentPath: string = "";
  SourceOfFundDocumentPath: string = "";
  AddressProofDocumentPath: string = "";
  MTFormDocumentPath: string = "";
  IDRequriedDocumentPath: string = "";
  // Umair Abid  11 june 2024
  AccountIds: string = "";
  SDNID_1: string = "";
  Type_1: string = "";

  SDNID_2: string = "";
  Type_2: string = "";

  SDNID_3: string = "";
  Type_3: string = "";

  SDNID_4: string = "";
  Type_4: string = "";

  SDNID_5: string = "";
  Type_5: string = "";

  SDNID_6: string = "";
  Type_6: string = "";

  public static ComboFilter(lst: any[], Key:string, Value:any, Display:any) {

    if (Value == undefined || Value == 0 || Value == '') {
      return "All";
    }
    else {

      return lst.find(x => x[Key] == Value)[Display];
    }

  }
  public static ComboText(Key:string) {   

    var t: any = document.getElementById(Key);
    var selectedText = t.options[t.selectedIndex].text;
    return selectedText;

  }
  FixAmount: number = 0;
  OffDayID: number = 0;
  OffDayUserID: number = 0;
  OffDayUserName: string = "";
  DailyUsedLimit: number = 0;
  IsMobileApp: boolean = false;
  ServiceTypeID: number = 0;
  PTType: string = "";
  Rate: number = 0;
  IsCommercial: boolean = false;
  cComplianceTeamList_1: any[] = [];
  cComplianceTeamList_2: any[] = [];
  bComplianceTeamList_1: any[] = [];
  bComplianceTeamList_2: any[] = [];

  bSDNID_1: string = "";
  bType_1: string = "";

  bSDNID_2: string = "";
  bType_2: string = "";

  bSDNID_3: string = "";
  bType_3: string = "";

  bSDNID_4: string = "";
  bType_4: string = "";

  bSDNID_5: string = "";
  bType_5: string = "";

  bSDNID_6: string = "";
  bType_6: string = "";


  cPEPComplianceTeamList_1: any[] = [];
  cPEPComplianceTeamList_2: any[] = [];
  bPEPComplianceTeamList_1: any[] = [];
  bPEPComplianceTeamList_2: any[] = [];
  multipleAccountDiversionListCollection: any[] = [];


  PEPSDNID_1: string = "";
  PEPType_1: string = "";

  PEPSDNID_2: string = "";
  PEPType_2: string = "";

  PEPSDNID_3: string = "";
  PEPType_3: string = "";

  PEPSDNID_4: string = "";
  PEPType_4: string = "";

  PEPSDNID_5: string = "";
  PEPType_5: string = "";

  PEPSDNID_6: string = "";
  PEPType_6: string = "";


  bPEPSDNID_1: string = "";
  bPEPType_1: string = "";

  bPEPSDNID_2: string = "";
  bPEPType_2: string = "";

  bPEPSDNID_3: string = "";
  bPEPType_3: string = "";

  bPEPSDNID_4: string = "";
  bPEPType_4: string = "";

  bPEPSDNID_5: string = "";
  bPEPType_5: string = "";

  bPEPSDNID_6: string = "";
  bPEPType_6: string = "";
  ShowAllCurrency: boolean = false;
  // fcy Umair
  TellerId: number = 0;
  Narration: string = "";
  IsParcel: number = 0;
  Description: string = "";
  BranchInID: number = 0;
  FCYTypeID: number = 0;
  ParcelTypeId: number = 0;
  CurencyInID: number = 0;
  CurrencyOutID: number = 0;
  RateTypeID: number = 0;
  TypeId: number = 0;
  CustomerTypeID: number = 0;
  CustomerTypeCategoryID: number = 0;
  AccountType: number = 0;
  BranchOutID: number = 0;
  CurencyOutID: number = 0;
  CurrencyInID: number = 0;
  RateOut: number = 0;
  IsApproved: boolean = false;
  TabNo: number = 0;
  Comment: string = "";
  PIFID: number = 0;
  EmployeeName: string = "";
  CompanyID: number = 0;
}
