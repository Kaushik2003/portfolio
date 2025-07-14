import React from "react"
import {
  Battery,
  Bluetooth,
  Calendar,
  Clock,
  Cloud,
  Droplets,
  Fingerprint,
  MapPin,
  MessageSquare,
  Mic,
  ShoppingCart,
  Star,
  Sun,
  Users,
  Video,
  Wind,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { toast } from "sonner"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Expandable,
  ExpandableCard,
  ExpandableCardContent,
  ExpandableCardFooter,
  ExpandableCardHeader,
  ExpandableContent,
  ExpandableTrigger,
} from "@/components/ui/expandable"


export default function DesignSyncExample({ experiences }: {
  experiences: Array<{
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
  }>
}) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-24">
      {experiences.map((exp, idx) => (
        <Expandable
          key={idx}
          expandDirection="both"
          expandBehavior="replace"
          initialDelay={1}
        >
          {({ isExpanded }) => (
            <ExpandableTrigger>
              <ExpandableCard
                className="w-full max-w-3xl relative shadow-lg bg-black rounded-xl p-6 mb-0"
                collapsedSize={{ width: 500, height: 240 }}
                expandedSize={{ width: 900, height: 450 }}
                hoverToExpand={true}
                expandDelay={0.1}
                collapseDelay={500}
              >
                <ExpandableCardHeader>
                  <div className="flex justify-between items-start w-full mb-4">
                    <div>
                      <Badge
                        variant="secondary"
                        className="bg-blue-00 text-blue-600 hover:bg-blue-600 hover:text-white mb-2"
                      >
                        {exp.period}
                      </Badge>
                      <h3 className="font-semibold text-xl text-gray-800 dark:text-white mb-1">
                        {exp.role} <span className="text-base font-normal text-gray-500 dark:text-gray-400">@ {exp.company}</span>
                      </h3>
                    </div>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button size="icon" variant="outline" className="h-8 w-8">
                            <Calendar className="h-4 w-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{exp.period}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </ExpandableCardHeader>
                <ExpandableCardContent>
                  <div className="flex flex-col items-start justify-between gap-2 mb-2">
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ExpandableContent preset="blur-md" stagger staggerChildren={0.2}>
                    <p className="text-sm text-gray-700 dark:text-gray-200 mb-3">
                      {exp.description}
                    </p>
                    <div className="mb-2">
                      <h4 className="font-medium text-sm text-gray-800 dark:text-gray-100 flex items-center mb-2">
                        <Star className="h-4 w-4 mr-2 text-yellow-500" />
                        Highlights:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h, i) => (
                          <Badge key={i} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded px-2 py-1">
                            {h}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ExpandableContent>
                </ExpandableCardContent>
                <ExpandableContent preset="slide-up">
                  <ExpandableCardFooter>
                    <div className="flex items-center justify-between w-full text-xs text-gray-500 dark:text-gray-400 pt-2">
                      <span>{exp.company}</span>
                      <span>{exp.period}</span>
                    </div>
                  </ExpandableCardFooter>
                </ExpandableContent>
              </ExpandableCard>
            </ExpandableTrigger>
          )}
        </Expandable>
      ))}
    </div>
  )
}