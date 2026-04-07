export interface VastuAnalysisRequest {
  plotShape: string;
  facingDirection: string;
  surroundings: string;
  purpose: 'Residential' | 'Commercial' | 'Industrial';
}

export interface ConsultationRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
}
