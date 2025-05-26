// Type definitions for the portfolio project

// Video component types
interface VideoResumeProps {
  videoUrl?: string;
  poster?: string;
  onClose: () => void;
}

// Resume download types
type ResumeFormat = 'pdf' | 'csv';