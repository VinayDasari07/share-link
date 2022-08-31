/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { makeAutoObservable, runInAction } from 'mobx'
import { searchResults as searchResultsData } from '../content'
import { SearchProfile, SearchResults as SearchResultsType } from '../src/components/types/share.type'

class ShareUrlStore {
  searchInput: string = ''
  clickedOnSearch: boolean = false
  searchResults: SearchResultsType = searchResultsData
  hasSelectedOnSearch: boolean = false
  indexOfSelectedProfileOnSearch: number = 1
  accessTypeSelectedOnSearch: string = 'Full access'
  profileInvitedOnSearch: SearchProfile = { name: '', logoUrl: '', email: '' }
  constructor () {
    makeAutoObservable(this)
  }

  toggleClickedOnSearch (): void {
    runInAction(() => {
      this.clickedOnSearch = !this.clickedOnSearch
    })
  }

  toggleHasSelectedOnSearch (): void {
    runInAction(() => {
      this.hasSelectedOnSearch = !this.hasSelectedOnSearch
    })
  }

  getProfileFromInputOnSearch (): void {
    const numberOfPersonsFound = this.searchResults?.entity?.person?.length ?? 0
    const numberOfGroupsFound = this.searchResults?.entity?.group?.length ?? 0
    if ((Boolean(this.searchInput) &&
        (numberOfPersonsFound !== 0 || numberOfGroupsFound !== 0)) ||
        (!this.searchInput)) {
      let profile = { name: '', logoUrl: '' }
      if (this.indexOfSelectedProfileOnSearch > 100) {
        const indexOfProfile: number = (this.indexOfSelectedProfileOnSearch % 100) - 1
        const checkProfile = this.searchResults?.entity?.group ?? []
        if (checkProfile?.[indexOfProfile]) {
          profile = checkProfile?.[indexOfProfile]
        }
      } else {
        const indexOfProfile: number = this.indexOfSelectedProfileOnSearch - 1
        const checkProfile = this.searchResults?.entity?.group ?? []
        if (checkProfile?.[indexOfProfile]) {
          profile = checkProfile?.[indexOfProfile]
        }
      }
      runInAction(() => {
        this?.toggleHasSelectedOnSearch()
        this.updateProfileInvitedOnSearch(profile)
      })
    }
  }

  updateSearchResults (searchInput: string): void {
    runInAction(() => {
      this.searchInput = searchInput
      const searchPeople = searchResultsData?.entity?.person?.filter((person) => person?.name?.includes(searchInput))
      const searchGroup = searchResultsData?.entity?.group?.filter((person) => person?.name?.includes(searchInput))
      this.searchResults = {
        entity: {
          person: searchPeople,
          group: searchGroup
        }
      }
    })
  }

  updateIndexOfSelectedProfileOnSearch (index: number): void {
    runInAction(() => {
      this.indexOfSelectedProfileOnSearch = index
    })
  }

  restoreSearchResults (): void {
    runInAction(() => {
      this.searchResults = searchResultsData
    })
  }

  updateAccessType (accessType: string): void {
    runInAction(() => {
      this.accessTypeSelectedOnSearch = accessType
    })
  }

  updateProfileInvitedOnSearch (profile: SearchProfile): void {
    runInAction(() => {
      this.profileInvitedOnSearch = profile
    })
  }
}
export const store = new ShareUrlStore()
