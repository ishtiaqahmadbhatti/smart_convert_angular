export class ProfileModel {
  ID: number = 0;
  CreateDate: Date;
  CreateBy: number = 0
  Name: string = '';
  Address: string = '';
  PartnerTypeID: number = 0;
  CountryID: number = 0;
  AgreementReferenceNo: string = '';
  AgreementExpiryDate: string = '';
  COINo: string = '';
  PartnerType: string = '';
  Country: string = '';
  COIExpiryDate: string = '';
  PassportExpiryDate: string = '';
  MLRNo: string = '';
  MLRExpiryDate: string = '';
  PassportNo: string = '';
  OtherInfo: string = '';
  ReceiptWithoutLogo: boolean = false;
  ReceiptWithoutSendID: boolean = false;
  IsDoubleReceipt: boolean = false;
  IsProfileBalance: boolean = false;
  IsAgentReceipt: boolean = false;
  AddressType: string = '';
  Address_Flat_Villa_No: string = '';
  Address_BuildingName_No: string = '';
  Address_Locality: string = '';
  Address_City: string = '';
  Address_Province_State: string = '';
  ZipCode: string = '';
  Email: string = '';
  TelephoneNo: string = '';
  FaxNo: string = '';
  EntityActivity: string = '';
  SubEntityActivity: string = '';
  IDNumber: string = '';
  objManager: string = '';
  IDIssueDate: string = '';
  IDExpiryDate: Date;

  CompanyFormationDocumentsPath: string = '';
  UndertakerCompanyPath: string = '';
  BankStatementPath: string = '';
  IDPlaceOfIssue: string = '';
  TenancyContractPath: string = '';
  ImagesOfficePath: string = '';


  OwnerIDDocPath: string = '';
  OwnerAddressProofDocPath: string = '';
  AuthIDDocPath: string = '';
  AuthAddressProofDocPath: string = '';
  AuthPOAAuthorityletterPath: string = '';
  //Address_Country: string = '';
  AuthName: string = '';
  AuthAddress: string = '';
  AuthEmail: string = '';
  AuthMobileNo: string = '';
  AuthTelephoneNo: string = '';
  AuthIDType: number = 0;
  //AuthIDNumber: number=0;
  AuthIDNumber: string = '';
  AuthIDExpiry: Date = new Date();
  AuthNationality: string = '';
  AuthIDExpiryDate: Date = new Date();
  Owner: any = [];
  Director: any = [];
  Management: any = [];
  Signatory: any = [];
  ContactList: any = [];
  BankAccountList: any = [];
  UserID: number = 0;
  IsEstablishment: boolean = false;
  IsOwnerAuthSame: any;
  StepNo: number = 0;
  //04-03-2024: Ishtiaq Ahmad Added Properties For Profile Master
  CorrespondentClient: string = '';
  Organization: string = '';
  Institution: string = '';

  StockExchange: string = '';
  NameStockExchange: string = '';
  DateStockListing: Date = new Date();
  StockExchangeDocPath: string = '';

  CreditRatings: string = '';
  CreditRatedBy: string = '';
  CreditRatingScore: string = '';
  RatingDescription: string = '';
  CreditRatingsDocPath: string = '';

  //Organization Details
  OrganizationName: string = '';
  OrgRegisteredAddress: string = '';
  OrgRegisteredTelephoneNo: string = '';
  OrgRegisteredFax: string = '';
  OrgRegisteredEmailID: string = '';
  OrgRegisteredWebsite: string = '';
  OrgRegisteredPOADocPath: string = '';
  isBusinessRegisteredAddressSame: boolean = false;
  OrgBusinessAddress: string = '';
  OrgBusinessTelephoneNo: string = '';
  OrgBusinessFax: string = '';
  OrgBusinessEmailID: string = '';
  OrgBusinessWebsite: string = '';
  OrgBusinessPOADocPath: string = '';
  MailingCommunicationAddress: string = '';

  //Images of Office Premises Paths
  ImageOfficeInBuildingIndexDocPath: string = '';
  ImageOfficeFromOutsideDocPath: string = '';
  ImageOfficeFromInSideDocPath: string = '';

  //Legal Documents
  EstablishmentName: string = '';
  DateOfEstablishment: Date = new Date();
  PlaceOfEstablishment: string = '';
  CertificateOfIncorporationDocPath: string = '';
  MemorandumArticleOfAssociationDocPath: string = '';
  CommercialRegistrationNo: string = '';
  CRDocPath: string = '';
  CRIssuingAuthority: string = '';
  CRPlaceOfIssue: string = '';
  CRIssueDate: Date = new Date();
  CRExpiryDate: Date = new Date();
  TradingLicenseNo: string = '';
  TradeLicenceDocPath: string = '';
  TLIssuingAuthority: string = '';
  TLPlaceOfIssue: string = '';
  TLIssueDate: Date = new Date();
  TLExpiryDate: Date = new Date();
  RegulatoryLicenseNo: string = '';
  RegulatoryLicenseDocPath: string = '';
  RLPlaceOfIssue: string = '';
  RLIssueDate: Date = new Date();
  RLExpiryDate: Date = new Date();
  ActivityAllowedByLicense: string = '';
  RegulatorResponsible: string = '';
  RegulatorsWebsite: string = '';
  RegulatorInstitutionName: string = '';

  //Compliance Manager Responsible for AML / KYC
  OfficerName: string = '';
  OfficerIDDocPath: string = '';
  OfficerDesignation: string = '';
  OfficerContactNo: string = '';
  OfficerEmailID: string = '';
  ComplianceOfficeApproved: string = '';
  ComplianceApprovalLetterDocPath: string = '';
  ComplianceTeamStructureDocPath: string = '';

  //AML & KYC Details
  AMLAuditedby: string = '';
  AMLAuditorAddress: string = '';
  AMLLastAuditedDate: Date = new Date();
  AMLLastManualUpdatedDate: Date = new Date();
  DataProtectionPolicyDocPath: string = '';
  RiskAssessmentDocPath: string = '';
  AMLManualApprovedByBoardDocPath: string = '';
  AMLReportCertificateDocPath: string = '';
  URemitQuestionnaireDocPath: string = '';
  WolegsbergQuestionnaireDocPath: string = '';

  //Financials details of the Company
  AuditorsName: string = '';
  AuditedFirstYear: string = '';
  AuditedSecondYear: string = '';
  AuditedThirdYear: string = '';
  AuditedFinancialsYear1DocPath: string = '';
  AuditedFinancialsYear2DocPath: string = '';
  AuditedFinancialsYear3DocPath: string = '';
  BankAccountName: string = '';
  BankAccountNo: string = '';
  IBAN: string = '';
  BankSwiftCode: string = '';
  BankName: string = '';
  BankAddress: string = '';

  //Other Documents
  DeclarationCertificateDocPath: string = '';
  LetterPEPUndertakingDocPath: string = '';
  SourceWealthDocPath: string = '';
  POSStatementthreeMonthsDocPath: string = '';
  TaxCertificateCompanyDocPath: string = '';
  ContactDetailsDocPath: string = '';
  OrganizationStructureDocPath: string = '';

  //26-03-2024: Ishtiaq Ahmad Added Properties For Profile Master
  //DataProtectionPolicyUpdatedDate: Date = new Date();
  //RiskAssessmentUpdatedDate: Date = new Date();
  //AMLManualApprovedUpdatedDate: Date = new Date();
  //AMLReportCertificateUpdatedDate: Date = new Date();

  //POSStatementthreeMonthsUpdatedDate: Date = new Date();
  //TaxCertificateCompanyUpdatedDate: Date = new Date();
  OrganizationStructureUpdatedDate: Date = new Date();

  //07-04-2024: Ishtiaq Ahmad Added Properties For Profile Master
  ProfileID: number = 0;

  DateRating: Date = new Date();

  PartnerWebsite: string = '';

  RAddressType: string = '';
  RAddress_OfficeShop_No: string = '';
  RAddress_BuildingName_No: string = '';
  RAddress_City: string = '';
  RAddress_Locality: string = '';
  RAddress_Province_State: string = '';
  RAddress_Country: string = '';
  RTelDiallingCode: string = '';
  RTelCode: string = '';
  RTelNumber: string = '';
  RFaxDiallingCode: string = '';
  RFaxCode: string = '';
  RFaxNumber: string = '';
  BAddressType: string = '';
  BAddress_OfficeShop_No: string = '';
  BAddress_BuildingName_No: string = '';
  BAddress_City: string = '';
  BAddress_Locality: string = '';
  BAddress_Province_State: string = '';
  BAddress_Country: string = '';
  BTelDiallingCode: string = '';
  BTelCode: string = '';
  BTelNumber: string = '';
  BFaxDiallingCode: string = '';
  BFaxCode: string = '';
  BFaxNumber: string = '';
  OfficerMobileNumber: string = '';
  ComplianceTeamMembers: string = '';

  LastApproveAMLPolicyDocPath: string = '';

  DataProtectionPolicyDate: Date = new Date();
  RiskAssesmentPolicyDate: Date = new Date();

  CertificateofDueDiligenceDocPath: string = '';

  FirstAuditorName: string = '';
  FirstAuditorAddress: string = '';
  SecondAuditorName: string = '';
  SecondAuditorAddress: string = '';
  ThirdAuditorName: string = '';
  ThirdAuditorAddress: string = '';

  ChartLastUpdatedDate: Date = new Date();
  ChartDocPath: string = '';
  TaxNo: string = '';

  //25-06-2024: Ishtiaq Ahmad Added For Profile Master Pending Approval
  IsApproved: boolean = false;
  TabNo: number = 0;
  Comment: string = '';
  OwnerIDType: number = 0;
}
