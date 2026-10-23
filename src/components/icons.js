import {
  Megaphone, FileText, MessageCircle, Users, Brain, Layers, Lightbulb, Target,
  GraduationCap, BookOpen, School, Music, Mic, Gamepad2, Heart,
} from 'lucide-react'

const map = { Megaphone, FileText, MessageCircle, Users, Brain, Layers, Lightbulb, Target, GraduationCap, BookOpen, School, Music, Mic, Gamepad2, Heart }
export const getIcon = (name) => map[name] ?? Heart
