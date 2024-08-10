export interface JobPosting {
  count: Number;
  data: Data[];
  error: boolean;
  message: string;
  success: boolean;
}

export interface JobPostById {
  count: Number;
  data: Data;
  error: boolean;
  message: string;
  success: boolean;
}

export interface Data {
  applicantsCount: Number;
  average_rating: Number;
  categories: string[];
  createdAt: Date;
  datePosted: Date;
  deadline: Date;
  description: string;
  endDate: Date;
  id: string;
  idealCandidate: string;
  isBookmarked: boolean;
  isRolling: boolean;
  location: string[];
  logoUrl: string;
  opType: string;
  orgEmail: string;
  orgID: string;
  orgName: string;
  orgPrimaryPhone: string;
  perksAndBenefits: string | null;
  questions: string | null;
  requiredSkills: string[];
  requirements: string;
  responsibilities: string;
  startDate: Date;
  status: string;
  title: string;
  total_reviews: Number;
  updatedAt: Date;
  viewsCount: Number;
  whenAndWhere: string;
}
