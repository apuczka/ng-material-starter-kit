export interface InfluacersModel {
  readonly name: string;
  readonly avatar: string;
  followedBy: InfluacersModel[];
  id:string;
}
