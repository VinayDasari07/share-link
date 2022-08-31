import { makeAutoObservable, runInAction } from 'mobx'
import { searchResults } from '../content'
import { SearchResults as SearchResultsType } from '../src/components/types/share.type'

class ShareUrlStore {
  searchInput: string = ''
  clickedOnSearch: boolean = false
  searchResults: SearchResultsType = searchResults
  hasSelectedOnSearch: boolean = false
  selectedProfileOnSearchIndex: boolean = false
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

  updateSearchResults (searchInput: string): void {
    runInAction(() => {
      this.searchInput = searchInput
      const searchPeople = searchResults?.entity?.person?.filter((person) => person?.name?.includes(searchInput))
      const searchGroup = searchResults?.entity?.group?.filter((person) => person?.name?.includes(searchInput))
      this.searchResults = {
        entity: {
          person: searchPeople,
          group: searchGroup
        }
      }
    })
  }
}
export const store = new ShareUrlStore()
