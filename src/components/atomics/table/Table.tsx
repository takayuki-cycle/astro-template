// Reference: https://park-ui.com/docs/panda/components/table

import * as _Table from '@/components/ui/table'

export const Table = (props: _Table.RootProps) => {
  return (
    <_Table.Root {...props}>
      <_Table.Caption>Product Inventory</_Table.Caption>
      <_Table.Head>
        <_Table.Row>
          <_Table.Header>ID</_Table.Header>
          <_Table.Header>Name</_Table.Header>
          <_Table.Header>Stock</_Table.Header>
          <_Table.Header textAlign='right'>Price</_Table.Header>
        </_Table.Row>
      </_Table.Head>
      <_Table.Body>
        {productData.map((product, index) => (
          <_Table.Row key={index}>
            <_Table.Cell fontWeight='medium'>{product.id}</_Table.Cell>
            <_Table.Cell>{product.name}</_Table.Cell>
            <_Table.Cell>{product.stock}</_Table.Cell>
            <_Table.Cell textAlign='right'>{product.price}</_Table.Cell>
          </_Table.Row>
        ))}
      </_Table.Body>
      <_Table.Foot>
        <_Table.Row>
          <_Table.Cell colSpan={2}>Totals</_Table.Cell>
          <_Table.Cell>87</_Table.Cell>
          <_Table.Cell textAlign='right'>$34,163.00</_Table.Cell>
        </_Table.Row>
      </_Table.Foot>
    </_Table.Root>
  )
}

const productData = [
  { id: 'P001', name: 'MacBook Pro', stock: 12, price: '$1999.00' },
  { id: 'P002', name: 'AirPods Pro', stock: 25, price: '$249.00' },
  { id: 'P003', name: 'Leather Wallet', stock: 50, price: '$79.00' },
]
