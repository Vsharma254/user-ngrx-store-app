
export interface Course {
    id: number,
    name: string
}
export interface Branch {
    id: number,
    name: string,
    course?: Course
}
export interface Category {
    id: number,
    name: string,
    residentialDomicileId: number,
    addedBy: number,
    addedOn: Date,
    modifiedBy?: number,
    modifiedOn?: Date,
    isVisible: boolean
}
export interface SubCategory {
    id: number,
    name: string,
    categoryId: number
}
export interface State {
    id: number,
    name: string,
 
}
export interface District {
    id: number,
    name: string,
    state: number
}
export interface Nationality {
    id: number,
    name: string
}
export interface ResidentialDomecile {
    id: number,
    name: string
}

export interface AcademicDomecile {
    id: number,
    name: string
}
export interface QualifyingExam {
    id: number,
    name: string
}
export interface QualifiedExam {
    id: number,
    name: string
}
export interface CourseApplied {
    id: number,
    name: string
}
export interface CollageType {
    id: number,
    name: string
}
export interface Collage {
    id: number,
    name: string
}
export interface DocumentTypesList
{
    id: number,
    name: string
}

export interface AllMasterList {
    courseList: Course[],
    branchList: Branch[],
    courseBranchList: Branch[],
    categoryList: Category[],
    subCategoryList:SubCategory[],
    nationalityList: Nationality[],
    residentialDomicileList: ResidentialDomecile[],
    academicDomicileList:AcademicDomecile[],
    stateList: State[],
    qualifyingExamList:QualifyingExam[],
    qualifiedExamsList:QualifiedExam[],
    courseAppliedList:CourseApplied[],
    collegesList:Collage[]
    documentTypesList:DocumentTypesList[],
    collegeTypeList:CollageType[]
}
export interface AllList {
    courseList: Course[],
    branchList: Branch[],
    courseBranchList: Branch[],
    categoryList: Category[],
    subCategoryList:SubCategory[],
    nationalityList: Nationality[],
    residentialDomicileList: ResidentialDomecile[],
    academicDomicileList:AcademicDomecile[],
    stateList: State[],
    qualifyingExamList:QualifyingExam[],
    qualifiedExamsList:QualifiedExam[],
    courseAppliedList:CourseApplied[],
    collegesList:Collage[],
    documentTypesList:DocumentTypesList[],
    collegeTypeList:CollageType[]
}

export interface MasterState extends AllList {

}