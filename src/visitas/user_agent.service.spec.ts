import { Test, TestingModule } from '@nestjs/testing';
import { UserAgentService } from './user_agent.service';

describe('UserAgentService', () => {
  let service: UserAgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserAgentService],
    }).compile();

    service = module.get<UserAgentService>(UserAgentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
