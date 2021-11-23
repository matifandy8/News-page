import React from 'react';
import { act, render, screen} from '@testing-library/react';
import Cardheadline from './Cardheadline';
import { Headline } from '../../type';
import '@testing-library/jest-dom/extend-expect'


const mockHeadline = {
    "id": 11,
    "name": "Autoblog",
    "author": "Bloomberg",
    "title": "Self-driving startups join EVs as next stock market obsession",
    "description": "Filed under:\n Green,Autonomous Vehicles\n Continue reading Self-driving startups join EVs as next stock market obsession\nSelf-driving startups join EVs as next stock market obsession originally appeared on Autoblog on Sat, 20 Nov 2021 13:00:00 EST. Please see …",
    "url": "https://www.autoblog.com/2021/11/20/autonomous-driving-startup-stocks/",
    "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2021/11/19160501/autonomous.jpg",
    "publishedAt": "2021-11-20T18:00:00Z",
    "content": "Self-driving technology companies are the latest automotive stocks to become an obsession of retail traders, with firms like Aurora Innovation Inc. surging Friday on high volume.\r\nAurora, which went … [+1254 chars]"
}as Headline;
  
  describe("Cardheadline", () => {
    it("should render the name", () => {
      const { getByText } = render(<Cardheadline headline={mockHeadline} />);
      expect(getByText("Autoblog")).toBeInTheDocument();
    });
  
  });
