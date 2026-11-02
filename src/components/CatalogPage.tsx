import React, { useEffect, useState } from 'react';
import { ExternalLinkIcon, XIcon } from './Icons';
import { Reveal } from './Reveal';
import { MaterialPanel } from './MaterialPanel';

type CatalogItem = {
  title: string;
  desc: string;
  variant: 'bazalt' | 'magma' | 'lithos' | 'tundra' | 'lumina';
  profile: 'flat' | 'frame' | 'slatted' | 'grooved' | 'integrated-handle' | 'half-round' | 'integrated-handle-full' | 'integrated-handle-centered' | 'integrated-handle-hidden';
  long