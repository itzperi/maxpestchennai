
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({ 
  quote, 
  author, 
  role, 
  rating,
  className 
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        'bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300',
        className
      )}
    >
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={cn(
              'h-5 w-5',
              i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'
            )}
          />
        ))}
      </div>
      
      <blockquote className="text-gray-700 mb-6">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div>
          <p className="font-semibold">{author}</p>
          {role && <p className="text-sm text-muted-foreground">{role}</p>}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
