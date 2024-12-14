export class CountryModel {
  ID: number=0;
  CreateDate: Date;
  AlterDAte: Date;
  Name: string='';
  Code: string='';
  CurrencyID: number=0;
  RemitTypeID: number=0;
  ZoneID: number=0;
  GMTDifference: string='';
  CreditLimitUSD1: number=0;
  CreditLimitUSD2: number=0;
  CreditLimitUSD3: number=0;
  BenDailyPayments: number=0;
  Active: boolean=false;
  AlterBy: number=0;
  DialingCode: string='';
  CreditLimitUSDCTL: number=0;
  MinMobileNoLenght: number=0;
  RiskCategoryID: number=0;
  ISOCode: string='';
  IsBackendCharges: boolean=false;
  IsBackend: boolean = false;
  IsRebate: boolean=false;
  ISO3Code: string='';
  IBANLength: number=0;
  IBANStart: number=0;
  IBANEnd: number=0;
  IDTypeID: number=0;
  IsNotExpiry: boolean=false;
  Length: number=0;
  CountryID: number=0;
  CollectionParam: any[]=[];
  MinMobileNoCodeLenght: number=0;
  MaxMobileNoLenght: number=0;
  MinPhoneNoLenght: number=0;
  MaxPhoneNoLenght: number=0;
  AreaCodeLenght: number = 0;
  IsIBAN: boolean = false;
  IsIBANAnyBank: boolean = false;
 
}