export type RiskLevel = "Low" | "Moderate" | "High" | "Critical";
export type AlertSeverity = "Critical" | "Warning" | "Info";
export interface Patient { id:string; name:string; age:number; gender:string; room:string; bed:string; status:"Monitoring"|"Stable"|"Review"; heartRate:number; systolic:number; diastolic:number; spo2:number; temperature:number; riskScore:number; riskLevel:RiskLevel; conditions:string[]; admission:string; doctor:string; }
export interface RiskVector { name:string; score:number; level:RiskLevel; trend:"up"|"down"|"stable"; }
export interface FeatureContribution { feature:string; value:number; label:string; direction:"positive"|"negative"; }
export interface AlertItem { id:string; patientId:string; patientName:string; title:string; description:string; severity:AlertSeverity; time:string; acknowledged:boolean; }
export interface ActivityItem { title:string; detail:string; time:string; type:"prediction"|"telemetry"|"alert"|"note"; }
