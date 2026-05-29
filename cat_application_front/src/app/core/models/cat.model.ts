// Interfaces for get cat breeds API response
export interface breedWeight {
    imperial: string;
    metric: string;
}

export interface Breed {
  id: string;
  name: string;
  weight: breedWeight;
  description: string;
  temperament: string;
  origin: string;
  country_codes: string;
  country_code: string;
  life_span: string;
  wikipedia_url?: string; 
  cfa_url?: string;
  vetstreet_url?: string;
  vcahospitals_url?: string;
  reference_image_id?: string;
  breed_group: string | null; 
  alt_names: string;
  indoor: number;
  lap: number;
  adaptability: number;
  affection_level: number;
  child_friendly: number;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  health_issues: number;
  intelligence: number;
  shedding_level: number;
  social_needs: number;
  stranger_friendly: number;
  vocalisation: number;
  experimental: number;
  hairless: number;
  natural: number;
  rare: number;
  rex: number;
  suppressed_tail: number;
  short_legs: number;
  hypoallergenic: number;
}
