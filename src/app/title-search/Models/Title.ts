import { Award } from './Award';
import { Participant } from './Participant';
import { Storyline } from './Storyline';

export class Title {

    public id: string;
    public titleId: number;
    public titleName: string;
    public titleNameSortable: string;
    public releaseYear: number;
    public processDateTimeUTC: Date;

    public awards: Award[];
    public genres: string[];
    public participants: Participant[];
    public storylines: Storyline[];
}