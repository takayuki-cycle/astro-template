// Reference: https://park-ui.com/docs/panda/components/date-picker

/*
import { Button } from '@/components/ui/button'
import * as _DatePicker from '@/components/ui/date-picker'
import { IconButton } from '@/components/ui/icon-button'
import { Input } from '@/components/ui/input'
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

export const DatePicker = (props: _DatePicker.RootProps) => {
  return (
    <_DatePicker.Root
      positioning={{ sameWidth: true }}
      startOfWeek={1}
      selectionMode='range'
      {...props}
    >
      <_DatePicker.Label>Date Picker</_DatePicker.Label>
      <_DatePicker.Control>
        <_DatePicker.Input index={0} asChild>
          <Input />
        </_DatePicker.Input>
        <_DatePicker.Input index={1} asChild>
          <Input />
        </_DatePicker.Input>
        <_DatePicker.Trigger asChild>
          <IconButton variant='outline' aria-label='Open date picker'>
            <CalendarIcon />
          </IconButton>
        </_DatePicker.Trigger>
      </_DatePicker.Control>
      <_DatePicker.Positioner>
        <_DatePicker.Content>
          <_DatePicker.View view='day'>
            <_DatePicker.Context>
              {(api) => (
                <>
                  <_DatePicker.ViewControl>
                    <_DatePicker.PrevTrigger asChild>
                      <IconButton variant='ghost' size='sm'>
                        <ChevronLeftIcon />
                      </IconButton>
                    </_DatePicker.PrevTrigger>
                    <_DatePicker.ViewTrigger asChild>
                      <Button variant='ghost' size='sm'>
                        <_DatePicker.RangeText />
                      </Button>
                    </_DatePicker.ViewTrigger>
                    <_DatePicker.NextTrigger asChild>
                      <IconButton variant='ghost' size='sm'>
                        <ChevronRightIcon />
                      </IconButton>
                    </_DatePicker.NextTrigger>
                  </_DatePicker.ViewControl>
                  <_DatePicker.Table>
                    <_DatePicker.TableHead>
                      <_DatePicker.TableRow>
                        {api.weekDays.map((weekDay, id) => (
                          <_DatePicker.TableHeader key={id}>
                            {weekDay.narrow}
                          </_DatePicker.TableHeader>
                        ))}
                      </_DatePicker.TableRow>
                    </_DatePicker.TableHead>
                    <_DatePicker.TableBody>
                      {api.weeks.map((week, id) => (
                        <_DatePicker.TableRow key={id}>
                          {week.map((day, id) => (
                            <_DatePicker.TableCell key={id} value={day}>
                              <_DatePicker.TableCellTrigger asChild>
                                <IconButton variant='ghost'>{day.day}</IconButton>
                              </_DatePicker.TableCellTrigger>
                            </_DatePicker.TableCell>
                          ))}
                        </_DatePicker.TableRow>
                      ))}
                    </_DatePicker.TableBody>
                  </_DatePicker.Table>
                </>
              )}
            </_DatePicker.Context>
          </_DatePicker.View>
          <_DatePicker.View view='month'>
            <_DatePicker.Context>
              {(api) => (
                <>
                  <_DatePicker.ViewControl>
                    <_DatePicker.PrevTrigger asChild>
                      <IconButton variant='ghost' size='sm'>
                        <ChevronLeftIcon />
                      </IconButton>
                    </_DatePicker.PrevTrigger>
                    <_DatePicker.ViewTrigger asChild>
                      <Button variant='ghost' size='sm'>
                        <_DatePicker.RangeText />
                      </Button>
                    </_DatePicker.ViewTrigger>
                    <_DatePicker.NextTrigger asChild>
                      <IconButton variant='ghost' size='sm'>
                        <ChevronRightIcon />
                      </IconButton>
                    </_DatePicker.NextTrigger>
                  </_DatePicker.ViewControl>
                  <_DatePicker.Table>
                    <_DatePicker.TableBody>
                      {api.getMonthsGrid({ columns: 4, format: 'short' }).map((months, id) => (
                        <_DatePicker.TableRow key={id}>
                          {months.map((month, id) => (
                            <_DatePicker.TableCell key={id} value={month.value}>
                              <_DatePicker.TableCellTrigger asChild>
                                <Button variant='ghost'>{month.label}</Button>
                              </_DatePicker.TableCellTrigger>
                            </_DatePicker.TableCell>
                          ))}
                        </_DatePicker.TableRow>
                      ))}
                    </_DatePicker.TableBody>
                  </_DatePicker.Table>
                </>
              )}
            </_DatePicker.Context>
          </_DatePicker.View>
          <_DatePicker.View view='year'>
            <_DatePicker.Context>
              {(api) => (
                <>
                  <_DatePicker.ViewControl>
                    <_DatePicker.PrevTrigger asChild>
                      <IconButton variant='ghost' size='sm'>
                        <ChevronLeftIcon />
                      </IconButton>
                    </_DatePicker.PrevTrigger>
                    <_DatePicker.ViewTrigger asChild>
                      <Button variant='ghost' size='sm'>
                        <_DatePicker.RangeText />
                      </Button>
                    </_DatePicker.ViewTrigger>
                    <_DatePicker.NextTrigger asChild>
                      <IconButton variant='ghost' size='sm'>
                        <ChevronRightIcon />
                      </IconButton>
                    </_DatePicker.NextTrigger>
                  </_DatePicker.ViewControl>
                  <_DatePicker.Table>
                    <_DatePicker.TableBody>
                      {api.getYearsGrid({ columns: 4 }).map((years, id) => (
                        <_DatePicker.TableRow key={id}>
                          {years.map((year, id) => (
                            <_DatePicker.TableCell key={id} value={year.value}>
                              <_DatePicker.TableCellTrigger asChild>
                                <Button variant='ghost'>{year.label}</Button>
                              </_DatePicker.TableCellTrigger>
                            </_DatePicker.TableCell>
                          ))}
                        </_DatePicker.TableRow>
                      ))}
                    </_DatePicker.TableBody>
                  </_DatePicker.Table>
                </>
              )}
            </_DatePicker.Context>
          </_DatePicker.View>
        </_DatePicker.Content>
      </_DatePicker.Positioner>
    </_DatePicker.Root>
  )
}
*/
