import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApplicationConfiguration } from '../app.config';
import { CountryModel,RequestFilter } from '../app_controllers/models.controller';

@Injectable({ providedIn: 'root'})
export class CountryService {

  private _url =ApplicationConfiguration.Get().ApiServiceLink + 'Country';
  constructor(private http: HttpClient) { }


  Load_CountryAll() {
    return this.http.get(this._url)
  }

  AppHoldCountryList() {
    return this.http.get(this._url + "/AppHoldCountryList");
  }

  Load_CountryListByName(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListByName", obj, {
      headers
    })
  }

  View_CountryList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/View_CountryList", obj, {
      headers
    })
  }

  ViewCommercialCountryByCurrencyID(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/ViewCommercialCountryByCurrencyID", obj, {
      headers
    })
  }
  View_AllCountryList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/ViewCountryList", obj, {
      headers
    })
  }


  Load_CountryList_PT() {
    return this.http.get(this._url + "/Load_CountryList_PT")
  }

  LoadCountryList() {
   // alert("dfgh");
    return this.http.get(this._url)
  }
  LoadZoneList() {
    return this.http.get(this._url+"/ZoneList")
  }


  LoadCountryByID(id: number) {
    return this.http.get(this._url + "/LoadCountryByID/" + id)
  }

  SaveCountry(countryModel: CountryModel) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/SaveCountry", countryModel, {
      headers
    })
  }

  DeleteCountry(id: number) {
    return this.http.get(this._url + "/DeleteCountry/" + id)
  }

  LoadOnlineCountryList(obj: RequestFilter) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post(this._url + "/LoadOnlineCountryList", obj, {
            headers
        })
 }

  Load_AccountListWithCategory(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_AccountListWithCategory", obj, {
      headers
    })
  }

  Load_CountryList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryList", obj, {
      headers
    })
  }
  LoadCountryListBySrcAccountMarginID(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryListBySrcAccountMarginID", obj, {
      headers
    })
  }

  Load_CountryListSend_ForCommission(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListSend_ForCommission", obj, {
      headers
    })
  }

  LoadCountryListBranchExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryListBranchExist", obj, {
      headers
    })
  }
  
  LoadCountyRemitTypeList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountyRemitTypeList", obj, {
      headers
    })
  }

  Load_CountryListByPaymentMode(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListByPaymentMode", obj, {
      headers
    })
  }

  LoadPaymentTypeByCountryID(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadPaymentTypeByCountryID", obj, {
      headers
    })
  }

  Load_CountryListCode(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListByCode", obj, {
      headers
    })
  }

  Load_CountryListByCode(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListByCode", obj, {
      headers
    })
  }

  Load_CountryListByDistination(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListByDistination", obj, {
      headers
    })
  }

  Load_CountryListFromBankList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListFromBankList", obj, {
      headers
    })
  }

  Load_CountryListHoldAccountLevelOpertion_View(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListHoldAccountLevelOpertion_View", obj, {
      headers
    })
  }

  ViewCountryListTransactionPaidMarkAuto(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/ViewCountryListTransactionPaidMarkAuto", obj, {
      headers
    })
  }





  



  Load_CountryListMDevTrans() {
    return this.http.get(this._url + "/Load_CountryListMDevTrans")
  }
  Load_AccountList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_AccountList", obj, {
      headers
    })

  }
  Load_AccountListForMultipleDiversion(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_AccountListForMultipleDiversion", obj, {
      headers
    })

  }
  MultipleAccountDervission(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/MultipleAccountDervission", obj, {
      headers
    })

  }
  Load_CountryListMTAccountAnyBank(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListMTAccountAnyBank", obj, {
      headers
    })
  }


  Load_CountryListMTAccountBank(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListMTAccountBank", obj, {
      headers
    })
  }

  Load_SourceCountryListCommissionCoverFromRateAvaliable(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    return this.http.post(this._url + "/Load_SourceCountryListCommissionCoverFromRateAvaliable", obj, {
      headers
    })
  }

  Load_DestinationCountryListCommissionCoverFromRateAvaliable(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_DestinationCountryListCommissionCoverFromRateAvaliable", obj, {
      headers
    })
  }

  Load_SourceCountryListCommission(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_SourceCountryListCommission", obj, {
      headers
    })
  }

  Load_CountryListCommission(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListCommission", obj, {
      headers
    })
  }
  Load_CommercialCountryAccountList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CommercialCountryAccountList", obj, {
      headers
    })
  }
  Load_CountryAccountList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryAccountList", obj, {
      headers
    })
  }
  Load_SourceCountryListCommissionAvaliable(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_SourceCountryListCommissionAvaliable", obj, {
      headers
    })
  }



  Load_SourceCountryListCommissionForApproval(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_SourceCountryListCommissionForApproval", obj, {
      headers
    })
  }



  Load_DestinationCountryListCommissionForApproval(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_DestinationCountryListCommissionForApproval", obj, {
      headers
    })
  }



  Load_DestinationCountryListCommissionAvaliable(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_DestinationCountryListCommissionAvaliable", obj, {
      headers
    })
  }

  Load_CountryListRebateFrom(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListRebateFrom", obj, {
      headers
    })
  }

  Load_CountryListAvaliableCorridor(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListAvaliableCorridor", obj, {
      headers
    })
  }

  Load_CountryIDTypeSettingDetails(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryIDTypeSettingDetails", obj, {
      headers
    })
  }

  Load_CountryListWithIDTypeAccountDetailsFilter(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListWithIDTypeAccountDetailsFilter", obj, {
      headers
    })
  }
  Insert_CountryIDTypeSettingDetails(obj:any) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Insert_CountryIDTypeSettingDetails", obj, {
      headers
    })
  }
  Load_CountryList_ForIsProfileCreditLimit(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryList_ForIsProfileCreditLimit", obj, {
      headers
    })
  }

  Load_CountryListWithAccountExists(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListWithAccountExists", obj, {
      headers
    })
  }

  Load_CountryListHoldAccountLevelOpertion_Transaction(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListHoldAccountLevelOpertion_Transaction", obj, {
      headers
    })
  }

  Load_SrcCountryListHoldAccountLevelOpertion_Transaction(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_SrcCountryListHoldAccountLevelOpertion_Transaction", obj, {
      headers
    })
  }


  Load_CountryListForModifyApprovalTransactions(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListForModifyApprovalTransactions", obj, {
      headers
    })
  }

  


  Load_CountryListForAgencyApprovalTransactions() {
    return this.http.get(this._url + "/Load_CountryListForAgencyApprovalTransactions")
  }
  Load_CountryListForAgencyApprovalOnlineTransactions() {
    return this.http.get(this._url + "/Load_CountryListForAgencyApprovalOnlineTransactions")
  }


  

  Load_CountryListIBAN_View(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListIBAN_View", obj, {
      headers
    })
  }

  Load_StatusForAgencyApprovalTransactions(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_StatusForAgencyApprovalTransactions", obj, {
      headers
    })
  }

  Load_CountryListByRebateExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListByRebateExist", obj, {
      headers
    })
  }

  Load_ToCountryListForRebate(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_ToCountryListRebate", obj, {
      headers
    })
  }

  LoadSrcCountryListByDestCountryID(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadSrcCountryListByDestCountryID", obj, {
      headers
    })
  }
  LoadDestCountryListBySrcCountryID(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadDestCountryListBySrcCountryID", obj, {
      headers
    })
  }

  LoadCountryListExistNotification() {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.get(this._url + "/LoadCountryListExistNotification", {
      headers
    })
  }
  
  LoadDestCountryListExistCoridorPermissionWRTSrcCountry(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadDestCountryListExistCoridorPermissionWRTSrcCountry", obj, {
      headers
    })
  }
  LoadSrcCountryListExistCoridorPermissionWRTDestCountry(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadSrcCountryListExistCoridorPermissionWRTDestCountry", obj, {
      headers
    })
  }
  CountryList_WhichTransactionSerialListExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/CountryList_WhichTransactionSerialListExist", obj, {
      headers
    })
  }

  LoadSrcCountryListTransactionExist() {
    return this.http.get(this._url + "/LoadSrcCountryListTransactionExist")
  }

  LoadSrcCountryListTransactionExistDate(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadSrcCountryListTransactionExistDate", obj, {
      headers
    })
  }

  LoadDestCountryListTransactionExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadDestCountryListTransactionExist", obj, {
      headers
    })
  }

  LoadSrcCountryListAgentWorkingHoursExist() {
    return this.http.get(this._url + "/LoadSrcCountryListAgentWorkingHoursExist")
  }


  LoadCountryListFilterByPaymentMode(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryListFilterByPaymentMode", obj, {
      headers
    })
  }

  LoadSrcCountryListExistNegativeCorridor(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadSrcCountryListExistNegativeCorridor", obj, {
      headers
    })
  }
  LoadDestCountryListExistNegativeCorridor(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadDestCountryListExistNegativeCorridor", obj, {
      headers
    })
  }

  Load_CountryListForAgentBranchUploaded() {
    return this.http.get(this._url + "/Load_CountryListForAgentBranchUploaded")
  }
  
  View_PlaceofIssue(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/View_PlaceofIssue", obj, {
      headers
    })
  }


  GetPlaceOfIssueByID(id: number) {
    return this.http.get(this._url + "/GetPlaceOfIssueByID/" + id)
  }
  
  Delete_PlaceOfIssue(id: number) {
    return this.http.get(this._url + "/Delete_PlaceOfIssue/" + id)
  }

  LoadCountryListBankExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryListBankExist", obj, {
      headers
    })
  }


  Load_OnlineCountryAvailableList(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_OnlineCountryAvailableList", obj, {
      headers
    })
  }

  Load_CountryListForPostedQueryStatus(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListForPostedQueryStatus", obj, {
      headers
    })
  }
  LoadCountryList_Assigned_FundDepositType(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryList_Assigned_FundDepositType", obj, {
      headers
    })
  }

  GetAccountCountryByProfileID(id: number) {
    return this.http.get(this._url + "/GetAccountCountryByProfileID/" + id)
  }

  LoadCountryList_NotificationAccountDetails_Exist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryList_NotificationAccountDetails_Exist", obj, {
      headers
    })
  }

  Load_SourceCountryListCommissionAvaliableAndActiveAccount(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_SourceCountryListCommissionAvaliableAndActiveAccount", obj, {
      headers
    })
  }

  Load_CountryListExistPaymentAvailabilityTime(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryListExistPaymentAvailabilityTime", obj, {
      headers
    })
  }

  Load_CountryList_ExchangeRateSendFilter(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryList_ExchangeRateSendFilter", obj, {
      headers
    })
  }

  Load_CountryList_ExchangeRateReceiveFilter(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_CountryList_ExchangeRateReceiveFilter", obj, {
      headers
    })
  }
  Load_DestinationCountryListCommissionAvaliableAndActiveAccount(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/Load_DestinationCountryListCommissionAvaliableAndActiveAccount", obj, {
      headers
    })
  }
  LoadSrcCountryListPayoutPaymentLimitDetailsExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadSrcCountryListPayoutPaymentLimitDetailsExist", obj, {
      headers
    })
  }
  LoadDestCountryListPayoutPaymentLimitDetailsExist(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadDestCountryListPayoutPaymentLimitDetailsExist", obj, {
      headers
    })
  }
  LoadCountryListCustomerVerificationOTPsLog(obj: RequestFilter) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post(this._url + "/LoadCountryListCustomerVerificationOTPsLog", obj, {
      headers
    })
  }

}
