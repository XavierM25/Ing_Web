export interface Achievement {
  id: number;
  icon: string;
  title: string;
  subtitle?: string;
  daysCount?: number;
  progress?: number;
  isCompleted: boolean;
  isTracked: boolean;
  requiredSteps: number;
  completedSteps: number;
  category: 'course' | 'streak' | 'skill' | 'community';
  description: string;
}
