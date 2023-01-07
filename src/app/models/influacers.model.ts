import { InfluancersComponent } from "../components/influancers/influancers.component";

export interface InfluacersModel {
  readonly name: string;
  readonly avatar: string;
  readonly followedBy: string;
  readonly followedByName: string;
  readonly children?:InfluancersComponent;
}
