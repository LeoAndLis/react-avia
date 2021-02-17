import ServerRequestService from './ServerRequestService';

export type TicketSegmentData = {
  date: string;
  destination: string;
  duration: number;
  origin: string;
  stops: string[];
};

export type TicketData = {
  carrier: string;
  price: number;
  segments: TicketSegmentData[];
};

export default class TicketsService {
  private readonly TICKETS_PATH = '/tickets';

  serverService = new ServerRequestService();

  public getTickets(): Promise<{ tickets: TicketData, stop: boolean }> {
    return this.serverService.getResource(this.TICKETS_PATH);
  }
}
