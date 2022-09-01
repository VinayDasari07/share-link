/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { makeAutoObservable, runInAction } from 'mobx'
import { bookmarked, searchResults as searchResultsData } from '../content'
import { BookmarkedProfiles, SearchProfile, SearchResults as SearchResultsType } from '../src/components/types/share.type'

class ShareUrlStore {
  showShareWindow: boolean = false
  searchInput: string = ''
  clickedOnSearch: boolean = false
  searchResults: SearchResultsType = searchResultsData
  hasSelectedOnSearch: boolean = false
  indexOfSelectedProfileOnSearch: number = 1
  accessTypeSelectedOnSearch: string = 'Full access'
  bookmarkedProfiles: BookmarkedProfiles[] = [{ ...bookmarked?.profileInfo, accessType: 'Full access' }]
  profileInvitedOnSearch: SearchProfile[] = []
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

  toggleShowShareWindow (): void {
    runInAction(() => {
      this.showShareWindow = !this.showShareWindow
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
        const checkProfile = this.searchResults?.entity?.person ?? []
        if (checkProfile?.[indexOfProfile]) {
          profile = checkProfile?.[indexOfProfile]
        }
      }

      runInAction(() => {
        this.toggleHasSelectedOnSearch()
        this.addProfileInvitedOnSearch(profile)
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

  resetAccessType (): void {
    runInAction(() => {
      this.accessTypeSelectedOnSearch = 'Full access'
    })
  }

  addProfileInvitedOnSearch (profile: SearchProfile): void {
    runInAction(() => {
      const profileArray = [{
        ...profile
      }]
      const isSelected = this.profileInvitedOnSearch?.find((profil) => profil?.name === profile?.name)
      const isBookmarked = this.bookmarkedProfiles?.find((profil) => profil?.name === profile?.name)
      if (!isSelected && !isBookmarked) {
        this.profileInvitedOnSearch = [...this.profileInvitedOnSearch, ...profileArray]
        this.resetSearchInput()
      }
    })
  }

  removeProfileInvitedOnSearch (profile: SearchProfile): void {
    runInAction(() => {
      const profiles = this.profileInvitedOnSearch?.filter((profil) => profil?.name !== profile?.name)
      this.profileInvitedOnSearch = [...profiles]
    })
  }

  resetProfileInvitedOnSearch (): void {
    runInAction(() => {
      this.profileInvitedOnSearch = []
    })
  }

  updateBookmarkedProfiles (): void {
    runInAction(() => {
      const profilesWithAccessType = this.profileInvitedOnSearch?.map((profile) => {
        return {
          ...profile,
          accessType: this.accessTypeSelectedOnSearch
        }
      })
      this.bookmarkedProfiles = [...this.bookmarkedProfiles, ...profilesWithAccessType]
      this.resetProfileInvitedOnSearch()
      this.toggleClickedOnSearch()
    })
  }

  resetSearchInput (): void {
    runInAction(() => {
      this.searchInput = ''
    })
  }
}
export const store = new ShareUrlStore()
