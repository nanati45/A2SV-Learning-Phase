export interface JobPosting {
  count: Number;
  data: Data[];
  error: boolean;
  message: string;
  success: boolean;
}

export interface JobPostByIdType {
  count: number;
  data: Data;
  error: string | null;
  message: string | null;
  success: boolean;
}

export interface Data {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: string;
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: string;
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: any | null;
  perksAndBenefits: any | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  orgWebsite: string;
  average_rating: number;
  total_reviews: number;
}

// export interface Card {
//   logoUrl: string;
//   title: string;
//   orgName: string;
//   companyAddress: string;
//   description: string;
// }
export interface Result {
  success: boolean;
  message: string;
  data: BookmarkData[];
  count: number;
  errors: string | null;
}

export interface BookmarkData {
  eventID: string;
  title: string;
  opType: string;
  orgName: string;
  datePosted: string;
  dateBookmarked: string;
  logoUrl: string;
  location: string;
}
