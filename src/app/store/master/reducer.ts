import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as myModels from './model';
import * as myActions from './action';
export interface MState extends myModels.MasterState {

}
const initialState = (function (): myModels.MasterState {
    const res: myModels.MasterState = {
        branchList: [],
        categoryList: [],
        subCategoryList: [],
        courseList: [],
        nationalityList: [],
        residentialDomicileList: [],
        academicDomicileList: [],
        stateList: [],
        courseAppliedList: [],
        qualifiedExamsList: [],
        qualifyingExamList: [],
        collegesList:[],
        documentTypesList:[],
        courseBranchList:[],
        collegeTypeList:[]
    };
    return res;
})();

export function reducer(state = initialState, action: myActions.Actions) {
    switch (action.type) {
        case myActions.actionType.GET_All_MASTER_SUCCESS: {
            const AllMasterList: myModels.AllMasterList = <myModels.AllMasterList>action.payload;
            return Object.assign({}, state, AllMasterList);
        }
        case myActions.actionType.GET_CATEGORY_BYID_SUCCESS: {
            const categoryList: myModels.Category[] = <myModels.Category[]>action.payload;
            return Object.assign({}, state, { categoryList });
        }
        case myActions.actionType.GET_SUBCATEGORY_BYID_SUCCESS: {
            const subCategoryList: myModels.SubCategory[] = <myModels.SubCategory[]>action.payload;
            return Object.assign({}, state, { subCategoryList });
        }
        case myActions.actionType.GET_BRANCH_BYID_SUCCESS: {
            const branchList: myModels.Branch[] = <myModels.Branch[]>action.payload;
            return Object.assign({}, state, { branchList });
        }
        case myActions.actionType.FILTER_BRANCH_BYCLG_ID_SUCCESS: {
            const courseBranchList: myModels.Branch[] = <
              myModels.Branch[]
            >action.payload;
            return Object.assign({}, state, { courseBranchList });
          }
          case myActions.actionType.FILTER_CLG_BYCLGTYPE_ID_SUCCESS: {
            const collegesList: myModels.Collage[] = <
              myModels.Collage[]
            >action.payload;
            return Object.assign({}, state, { collegesList });
          }
          
        default: {
            return state;
        }
    }
}
export const getMasterState = createFeatureSelector<myModels.MasterState>('master');

export const getMatserCourseList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.Course[] => state.courseList
);
export const getMatserBranchList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.Branch[] => state.branchList
);
export const getMatserCategoryList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.Category[] => state.categoryList
);
export const getMatserSubCategoryList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.SubCategory[] => state.subCategoryList
);
export const getMatserNationalityList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.Nationality[] => state.nationalityList
);
export const getMatserResidentialDomecileList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.ResidentialDomecile[] => state.residentialDomicileList
);
export const getMatserAcadmicDomecileList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.AcademicDomecile[] => state.academicDomicileList
);
export const getMatserStateList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.State[] => state.stateList
);
export const getMatserQualifyingList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.QualifyingExam[] => state.qualifyingExamList
);
export const getMatserQualifiedList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.QualifiedExam[] => state.qualifiedExamsList
);
export const getMatserCourseAppliedList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.CourseApplied[] => state.courseAppliedList
);
export const getMatserCollegeList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.Collage[] => state.collegesList
);
export const getMatserDocumentTypeList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.DocumentTypesList[] => state.documentTypesList
);
export const getMatsercollegeTypeList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.CollageType[] => state.collegeTypeList
);

export const getMatserCourseBranchList = createSelector(
    getMasterState,
    (state: myModels.MasterState): myModels.Branch[] => state.courseBranchList
);








