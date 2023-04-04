import authorReducer from './Authors/reducer'
import mangaReducer from "./Mangas/reducer"
import textReducer from "./SearchBar/reducer"
import categoriesReducer from "./Categories/reducer"
import alertReducer from "./Alerts/reducer"
import sortReducer from './Sort/reducer'
import myMangasReducer from "./MyMangas/reducer"
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'
import verifyReducer from './User/reducer'
import { configureStore } from "@reduxjs/toolkit"
import ModalComments from './ModalComments/reducer'
import getComments from './Comments/reducer'
import panelAdminReducer from './PanelAdmin/reducer'
import bottomTabsReducer from './ReloadBottomTabs/reducer'
import mangaClickReducer from './MangaClicked/reducer'

const store = configureStore({
    reducer: {
        author: authorReducer,
        mangas: mangaReducer,
        text: textReducer,
        categories: categoriesReducer,
        alert: alertReducer,
        order: sortReducer,
        myMangas: myMangasReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer,
        user: verifyReducer,
        commentsModal: ModalComments,
        comments: getComments,
        panelAdmin : panelAdminReducer,
        bottomTabsReducer: bottomTabsReducer,
        mangaClickReducer: mangaClickReducer,
    },
})

export default store