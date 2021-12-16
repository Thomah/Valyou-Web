import { GenericModel } from '../generic.model';
import { AuditModel } from '../audit.model';

export class IdeaModel extends AuditModel {
    icon: string = '';
    shortDescription: string = '';
    longDescription: string = '';
    hasAnonymousCreator: boolean = false;
    hasLeaderCreator: boolean = false;
    workspace: string = '';
    submitter: GenericModel = new GenericModel();
    organization: GenericModel = new GenericModel();
}