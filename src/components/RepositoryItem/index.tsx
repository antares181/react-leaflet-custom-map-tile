import React from 'react';

import { Repository } from '../../store/data/repositories/types';

interface OwnProps {
  repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
  return <li>{repository.name}</li>;
}
