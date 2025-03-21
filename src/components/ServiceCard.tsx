
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  className?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  imageSrc, 
  link,
  className 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10" />
      
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80 mb-4 line-clamp-2">{description}</p>
        <Link 
          to={link} 
          className="inline-flex items-center text-white hover:text-primary transition-colors"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
